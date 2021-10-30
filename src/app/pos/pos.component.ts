import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { forkJoin } from 'rxjs';
import { UtilService } from '../../service/util.service';
import { CategoryModel } from '../categories/categories.component';
import { CategoryService } from '../categories/category.service';
import { OrderService } from '../orders/order.service';
import { ProductModel } from '../products/products.model';
import { ProductService } from '../products/products.service';
import { DeliveryTaxModel } from '../settings/delivey&Tax/delivery-tax.component';
import { SettingService } from '../settings/setting.service';
import { ChangeQuantityEnum, OrderType, POSCartModel, POSOrderModel, SelectedProductModel, TimeScheduleModel, WorkingHoursModel } from './pos.model';
import { debounceTime, distinctUntilChanged, map, filter } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css']
})
export class PosComponent implements OnInit {
  public categoryList: Array<CategoryModel> = [];      // contains list of all categories
  public selectedCategory: CategoryModel;      // contains information of the selected category
  public page: number = 1;       // contains default page number
  public limit: number = 20;     // shows 20 records per page
  public total: number = 0;      // contains total records
  public productsList: Array<ProductModel> = [];     // contains products list
  public orderInfo: POSOrderModel;       // contains POS order information
  public currencyCode: string = null;      // contains currency code
  public isCheckoutStep: boolean = false;      // shows checkout form when true
  public changeQuantityTypes = ChangeQuantityEnum;      // contains change quantity types
  public taxInfo: DeliveryTaxModel;        // contains delivery and tax information
  public selectedProduct: SelectedProductModel;      // contains information of the selected variant
  public orderTypes = OrderType;      // contains order types
  public isLoading: boolean = false;     // disables order button when true
  public workingHoursData: Array<WorkingHoursModel> = [];        // contains working hours data
  public slots: Array<TimeScheduleModel> = [];     // contains list of slots available for the selected date
  public search: string = '';
  @ViewChild('searchProduct', { static: true }) searchProduct: ElementRef;


  constructor(private utilService: UtilService, private router: Router, private categoryService: CategoryService, private productsService: ProductService, private settingService: SettingService, private modalService: NgbModal, private orderService: OrderService) {
    this.orderInfo = this.getDefaultPOSOrderInfo();
    this.getCategoryAndCurrencyInfo();
  }

  ngOnInit(): void {
    fromEvent(this.searchProduct.nativeElement, 'keyup').pipe(
      map((event: any) => { return event.target.value; }),
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe((search: string) => {
      this.page = 1;
      if (search.length > 2) {
        this.search = search;
        this.getAllProductBySearch();
      } else if (search.length === 0) {
        this.search = '';
        this.getProductByCategoryId();
      }
      return;
    });
  }

  // gets category and currency information
  private getCategoryAndCurrencyInfo(): void {
    const category$ = this.categoryService.getAllEnabled();
    const currency$ = this.settingService.getCurrency();
    const tax$ = this.settingService.getDeliveryAndTaxInfo();
    const workingHours$ = this.settingService.getWorkingHourSlots();
    forkJoin([category$, currency$, tax$, workingHours$]).subscribe((res: any) => {
      this.categoryList = res[0].response_code === 200 ? res[0].response_data : [];
      this.currencyCode = res[1].response_code === 200 ? res[1].response_data.currencyCode : 'USD';
      this.taxInfo = res[2].response_code === 200 ? res[2].response_data : [];
      this.workingHoursData = res[3].response_code === 200 ? res[3].response_data : [];
      if (this.categoryList.length > 0) {
        this.selectedCategory = this.categoryList[0];
        this.getProductByCategoryId();
      }
    });
  }

  // gets default selected product information
  private getDefaultSelectedProductInfo(): SelectedProductModel {
    return {
      variant: null,
      quantity: 1,
      product: null
    };
  }

  // get's default POS order data
  private getDefaultPOSOrderInfo(): POSOrderModel {
    return {
      cart: [],
      subTotal: null,
      tax: null,
      deliveryCharges: null,
      grandTotal: null,
      customerName: '',
      customerMobileNumber: '',
      deliveryAddress: '',
      orderType: '',
      paymentType: 'COD',
      channel: 'POS',
      customerEmail: '',
      deliverySlotId: null,
      cashCollected: true
    }
  }

  // resets address and delivery slots
  public resetAddressData(): void {
    this.orderInfo.deliveryAddress = null;
    this.orderInfo.deliverySlotId = null;
    this.orderInfo.deliveryCharges = null;
    if (this.orderInfo.orderType == OrderType.PICK_UP) {
      this.orderInfo.cashCollected = true;
    } else {
      this.orderInfo.cashCollected = false;
    }
    this.calculateTotal();
  }

  // gets products by category id
  private getProductByCategoryId(): void {
    this.productsService.getPOSProductInfo(this.selectedCategory._id, this.page, this.limit).subscribe((res: any) => {
      this.productsList = res.response_code === 200 ? res.response_data : [];
      this.total = res.response_code === 200 ? res.total : 0;
      this.selectedProduct = this.getDefaultSelectedProductInfo();
      this.markAllProductItemsInCart();
    });
  }

  // called when category is selected 
  public categorySelectionEvent(category: CategoryModel): void {
    this.selectedCategory = category;
    this.page = 1;
    this.getProductByCategoryId();
  }

  // increments/decrements cart item quantity
  public changeQuantity(type: string, cartIndex: number): void {
    switch (type) {
      case ChangeQuantityEnum.INCREMENT:
        this.orderInfo.cart[cartIndex].quantity += 1;
        break;
      case ChangeQuantityEnum.DECREMENT:
        if (this.orderInfo.cart[cartIndex].quantity === 1) {
          this.removeItemFromCart(cartIndex);
          return;
        }
        this.orderInfo.cart[cartIndex].quantity -= 1;
    }
    this.calculateTotal();
  }

  // sets all available slots of the date selected
  public setSlots(date): void {
    const workingHourInfo = this.workingHoursData.find(hour => hour._id === date._id);
    this.slots = workingHourInfo.timings;
  }

  // marks all cart items as true in product list
  private markAllProductItemsInCart() {
    this.orderInfo.cart.forEach(cart => {
      this.markProductAsAddedToCart(cart.productId, true);
    });
  }

  // removes item from cart
  public removeItemFromCart(cartIndex: number): void {
    const productId: string = this.orderInfo.cart[cartIndex].productId;
    this.orderInfo.cart.splice(cartIndex, 1);
    this.calculateTotal();
    this.markProductAsAddedToCart(productId, false);
  }

  // calculate product total
  private calculateTotal(): void {
    this.orderInfo.subTotal = 0;
    this.orderInfo.cart.forEach(product => {
      product.dealAmount = product.isDealAvailable ? (product.productPrice * product.quantity) * (product.dealPercent / 100) : 0;
      product.productTotal = product.isDealAvailable ? (product.productPrice * product.quantity) - product.dealAmount : (product.productPrice * product.quantity);
      this.orderInfo.subTotal += product.productTotal;
    });
    this.orderInfo.tax = this.orderInfo.subTotal * (this.taxInfo.taxAmount / 100);
    this.orderInfo.grandTotal = this.orderInfo.subTotal + this.orderInfo.tax + (this.orderInfo.deliveryCharges ? this.orderInfo.deliveryCharges : 0);
  }

  // check variant
  public checkVariant(product: ProductModel, variantModal: TemplateRef<any>): void {
    this.selectedProduct.product = product;
    if (this.selectedProduct.product.variant.length === 1) {
      this.selectedProduct.variant = this.selectedProduct.product.variant[0];
      this.selectedProduct.quantity = 1;
      this.addProductToCart();
    } else {
      this.modalService.open(variantModal, { backdrop: 'static', keyboard: false });
    }
  }

  // adds product to cart
  public addProductToCart() {
    const cartInfo: POSCartModel = {
      productId: this.selectedProduct.product._id,
      productTitle: this.selectedProduct.product.title,
      productPrice: Number(this.selectedProduct.variant.price),
      quantity: this.selectedProduct.quantity,
      productTotal: Number(this.selectedProduct.variant.price) * this.selectedProduct.quantity,
      unit: this.selectedProduct.variant.unit,
      imageUrl: this.selectedProduct.product.productImages && this.selectedProduct.product.productImages.length > 0 ? this.selectedProduct.product.productImages[0].imageUrl : this.selectedProduct.product.imageUrl,
      filePath: this.selectedProduct.product.productImages && this.selectedProduct.product.productImages.length > 0 ? this.selectedProduct.product.productImages[0].filePath : this.selectedProduct.product.filePath,
      categoryId: this.selectedProduct.product.categoryId,
      subCategoryId: this.selectedProduct.product.subCategoryId,
      dealAmount: 0,
      isDealAvailable: this.selectedProduct.product.isDealAvailable,
      dealId: this.selectedProduct.product.dealId || null,
      dealPercent: this.selectedProduct.product.dealPercent || null,
    }
    this.orderInfo.cart.push(cartInfo);
    this.modalService.dismissAll();
    this.calculateTotal();
    this.markProductAsAddedToCart(cartInfo.productId, true);
    this.selectedProduct = this.getDefaultSelectedProductInfo();
  }

  // marks product as added to cart
  public markProductAsAddedToCart(productId: string, status: boolean): void {
    const productIndex = this.productsList.findIndex(product => product._id === productId);
    if (productIndex !== -1) {
      this.productsList[productIndex].isAddedToCart = status;
    }
  }

  // toggles cart and payment section
  public toggleCartSection(): void {
    this.isCheckoutStep = !this.isCheckoutStep;
  }

  // closes variant selection modal
  public closesModal() {
    this.modalService.dismissAll();
    this.selectedProduct = this.getDefaultSelectedProductInfo();
  }

  // places order
  public placeOrder(): void {
    this.calculateTotal();
    this.orderService.placePOSOrder(this.orderInfo).subscribe((res: any) => {
      if (res.response_code === 200) {
        this.utilService.successMessage(res.response_data);
        this.router.navigate(['pos/orders']);
      } else {
        this.utilService.errorMessage(res.response_data);
      }
    });
  }

  //get products By search
  public getAllProductBySearch() {
    this.productsService.getPOSProductInfoBySearch(this.search, this.page, this.limit).subscribe((res: any) => {
      this.productsList = (res != null) && (res.response_code === 200) ? res.response_data : [];
      this.total = res.total || 0;
    });
  }

  // Pagination
  public pageChange(page: number): void {
    this.page = page;
    if (this.search.length > 0) {
      this.getAllProductBySearch();
    } else {
      this.getProductByCategoryId();
    }
  }

}
