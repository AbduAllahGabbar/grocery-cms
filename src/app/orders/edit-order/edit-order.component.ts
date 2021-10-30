import { Component, OnInit, TemplateRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { UtilService } from "../../../service/util.service";
import { ChangeQuantityEnum, OrderType, POSCartModel } from "../../pos/pos.model";
import { ProductModel } from "../../products/products.model";
import { ProductService } from "../../products/products.service";
import { OrderService } from "../order.service";
import { AddToCartModel, CartProductModel, EditCartProductModel, OrderDetailModel, OrderFromEnum, PaymentTypeEnum } from "../orders.model";

@Component({
  selector: "app-edit-order",
  templateUrl: "./edit-order.component.html",
  styleUrls: ["./edit-order.component.css"],
})
export class EditOrderComponent implements OnInit {
  private closeResult: string = "";        // contains modal dismissal reason
  public isLoading = false;     // shows loader when true
  public orderData: OrderDetailModel;     // contains details of the order
  private orderId: string;      // contains order id from route
  public selectedProduct: EditCartProductModel;      // contains information about the product selected
  public orderChannel = OrderFromEnum;      // contains list of order channels
  public productList: Array<ProductModel> = [];      // contains products list
  public page: number = 1;     // contains default page number
  public limit: number = 25;       // shows 25 records per page
  public totalRecords: number = 0;     // contains total number of products
  public productDetails: ProductModel;     // contains product details
  public quantityList: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];       // contains list of quantities
  public addToCartData: AddToCartModel;      // contains product and variant information
  public changeQuantityTypes = ChangeQuantityEnum;        // contains
  public showAddProduct: boolean = false;          // shows add product section when true
  public availableWalletAmount: number = 0;      // contains available that can be used when sub total is exceeded. 
  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private modalService: NgbModal,
    private productService: ProductService,
    private utilService: UtilService,
    private router: Router
  ) {
    this.route.params.subscribe((response: any) => {
      this.orderId = response.id;
      this.getProductList();
      if (this.orderId) this.getOrderDetails();
    });
  }

  ngOnInit() {
  }

  // gets products list
  private getProductList(): void {
    this.productService.getAll(this.page, this.limit).subscribe((res: any) => {
      this.productList = res.response_code === 200 ? res.response_data : [];
      this.totalRecords = res.response_code === 200 ? res.total : 0;
    });
  }

  // called when page number is changed
  public pageChange(page: number): void {
    this.page = page;
    this.getProductList();
  }

  // gets order details
  private getOrderDetails(): void {
    this.isLoading = true;
    this.orderService.getById(this.orderId).subscribe((res: any) => {
      this.isLoading = false;
      this.orderData = res.response_data;
      if (this.orderData.order.orderFrom != OrderFromEnum.POS && (this.orderData.order.orderStatus === 'DELIVERED' || this.orderData.order.orderStatus === 'OUT_FOR_DELIVERY' || this.orderData.order.orderStatus === 'CANCELLED')) {
        this.navigateToOrderPage();
      }
      if (this.orderData.order.orderFrom != OrderFromEnum.POS) {
        if ((this.orderData.order.orderStatus !== 'DELIVERED' && this.orderData.order.orderStatus !== 'OUT_FOR_DELIVERY' && this.orderData.order.orderStatus !== 'CANCELLED')) {
          this.showAddProduct = true;
        } else {
          this.showAddProduct = false;
        }
      } else {
        if (this.orderData.order.orderType == OrderType.PICK_UP) {
          this.showAddProduct = true;
        } else if (this.orderData.order.isOrderModified && this.orderData.order.amountRefundedOrderModified && (this.orderData.order.orderStatus !== 'DELIVERED' && this.orderData.order.orderStatus !== 'OUT_FOR_DELIVERY' && this.orderData.order.orderStatus !== 'CANCELLED')) {
          this.showAddProduct = true;
        } else {
          this.showAddProduct = false;
        }
      }
    }, error => this.isLoading = false);
  }

  // navigates to orders page
  private navigateToOrderPage(): void {
    this.router.navigate([this.orderData.order.orderFrom == OrderFromEnum.POS ? 'pos/orders' : 'orders']);
  }

  // opens edit product modal
  public openEditProductModal(editProductModalElem, product: CartProductModel | POSCartModel, isPOS: boolean): void {
    this.selectedProduct = this.getDefaultEditProductData(isPOS, product);
    if (isPOS) {
      this.selectedProduct.modifiedPrice = this.selectedProduct.posOrderProduct.productPrice;
      this.selectedProduct.modifiedDealAmount = this.selectedProduct.posOrderProduct.dealAmount;
      this.selectedProduct.modifiedQuantity = this.selectedProduct.posOrderProduct.quantity;
      this.selectedProduct.modifiedVolume = this.selectedProduct.posOrderProduct.unit;
      this.selectedProduct.productTotal = this.selectedProduct.posOrderProduct.productTotal;
    } else {
      this.selectedProduct.modifiedPrice = this.selectedProduct.product.price;
      this.selectedProduct.modifiedDealAmount = this.selectedProduct.product.dealTotalAmount;
      this.selectedProduct.modifiedQuantity = this.selectedProduct.product.quantity;
      this.selectedProduct.modifiedVolume = this.selectedProduct.product.unit;
      this.selectedProduct.productTotal = this.selectedProduct.product.productTotal;
    }
    this.calculateTotal();
    if (this.orderData.order.paymentType == PaymentTypeEnum.STRIPE) {
      this.getUserWalletBalance(editProductModalElem);
    } else {
      this.openUpdateProductModal(editProductModalElem);
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  // get's customers available wallet balance to use in this order
  private getUserWalletBalance(modalElement): void {
    this.orderService.getMaximumWalletAmountToBeUsed(this.orderId).subscribe((res: any) => {
      if (res.response_code === 200) {
        this.availableWalletAmount = res.response_data.cutOffAmount;
        this.openUpdateProductModal(modalElement);
      }
    });
  }

  // open edit product modal
  private openUpdateProductModal(modalElement: TemplateRef<any>): void {
    this.modalService
      .open(modalElement, { ariaLabelledBy: "modal-basic-title", centered: true, backdrop: 'static' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
  }

  // gets default edit product data
  private getDefaultEditProductData(isPOS: boolean, product?: any): EditCartProductModel {
    return {
      product: !isPOS && product ? Object.assign({}, product as CartProductModel) : null,
      posOrderProduct: isPOS && product ? Object.assign({}, product as POSCartModel) : null,
      modifiedDealAmount: 0,
      modifiedPrice: 0,
      modifiedQuantity: 1,
      modifiedVolume: null,
      productTotal: 0
    }
  }

  // changes quantity
  public changeQuantity(type): void {
    switch (type) {
      case ChangeQuantityEnum.INCREMENT:
        this.selectedProduct.modifiedQuantity += 1;
        break;
      case ChangeQuantityEnum.DECREMENT:
        if (this.selectedProduct.modifiedQuantity === 1) {
          return;
        }
        this.selectedProduct.modifiedQuantity -= 1;
    }
    this.calculateTotal();
  }

  // changes quantity
  public changeAddProductQuantity(type): void {
    switch (type) {
      case ChangeQuantityEnum.INCREMENT:
        this.addToCartData.quantity += 1;
        break;
      case ChangeQuantityEnum.DECREMENT:
        if (this.addToCartData.quantity === 1) {
          return;
        }
        this.addToCartData.quantity -= 1;
    }
    this.calculateProductTotal();
  }

  // calculate total
  public calculateTotal(): void {
    const productPrice = this.selectedProduct.modifiedPrice * this.selectedProduct.modifiedQuantity;
    if (this.orderData.order.orderFrom == OrderFromEnum.POS) {
      if (this.selectedProduct.posOrderProduct.isDealAvailable) {
        this.selectedProduct.modifiedDealAmount = productPrice * (this.selectedProduct.posOrderProduct.dealPercent / 100);
      }
      this.selectedProduct.productTotal = productPrice - this.selectedProduct.modifiedDealAmount;
    } else {
      if (this.selectedProduct.product.isDealAvailable) {
        this.selectedProduct.modifiedDealAmount = productPrice * (this.selectedProduct.product.dealPercent / 100);
      }
      this.selectedProduct.productTotal = productPrice - this.selectedProduct.modifiedDealAmount;
    }
  }

  // closes edit product modal
  public closeEditProductModal(): void {
    this.modalService.dismissAll();
    this.selectedProduct = this.getDefaultEditProductData(false);
  }

  // get's product details
  public getProductDetails(productId: string, addToCartModalRef): void {
    this.productService.getById(productId).subscribe((res: any) => {
      this.productDetails = res.response_data;
      this.addToCartData = this.getDefaultAddToCartData();
      this.openAddToCartModal(addToCartModalRef);
    });
  }

  // opens add to cart modal
  private openAddToCartModal(modalRef: TemplateRef<any>): void {
    if (this.orderData.order.paymentType == PaymentTypeEnum.STRIPE) {
      this.getUserWalletBalance(modalRef);
    } else {
      this.openUpdateProductModal(modalRef);
    }
  }

  // closes add to cart modal
  public closeAddToCartModal() {
    this.modalService.dismissAll();
    this.productDetails = null;
    this.addToCartData = this.getDefaultAddToCartData();
  }

  // gets default add to cart data
  private getDefaultAddToCartData(): AddToCartModel {
    return {
      productId: this.productDetails ? this.productDetails._id : null,
      variant: null,
      quantity: 1,
      maximumAmount: null,
      productTotal: 0,
      dealAmount: 0
    }
  }

  // verifies sub-total before edit
  public verifySubTotalBeforeEdit(): void {
    if (this.orderData.order.orderFrom != OrderFromEnum.POS) {
      if (this.orderData.order.paymentType == PaymentTypeEnum.STRIPE) {
        let cartSubTotal = 0;
        this.orderData.order.cart.forEach(cart => {
          if (!cart.isProductDeleted) {
            if (cart.productId !== this.selectedProduct.product.productId) {
              cartSubTotal += cart.modifiedProductTotal ? cart.modifiedProductTotal : cart.productTotal;
            } else {
              cartSubTotal += this.selectedProduct.productTotal;
            }
          }
        });
        const subTotalDifference = cartSubTotal - this.orderData.order.subTotal;
        if (subTotalDifference < 0) {
          this.editOrder();
        } else if (subTotalDifference > 0 && subTotalDifference <= this.availableWalletAmount) {
          this.editOrder();
        } else if (subTotalDifference > 0 && subTotalDifference > this.availableWalletAmount) {
          this.utilService.errorMessage(`${this.utilService.getTranslatedMessage("SUB_TOTAL_EXCEED_ERROR")} ${this.availableWalletAmount}`);

        }
      } else {
        console.log("COD ORDER");
        this.editOrder();
      }
    } else {
      console.log("POS ORDER");
      this.editOrder();
    }
  }

  // edits cart item of an order
  private editOrder(): void {
    this.isLoading = true;
    const updateOrder$ = this.orderData.order.orderFrom == OrderFromEnum.POS ? this.orderService.updatePOSOrderItem(this.orderId, this.selectedProduct) : this.orderService.updateOrderItem(this.orderId, this.selectedProduct);
    updateOrder$.subscribe((res: any) => {
      this.isLoading = false;
      if (res.response_code === 200) {
        this.utilService.successMessage(res.response_data);
        this.closeEditProductModal();
        this.getOrderDetails();
      } else {
        this.utilService.errorMessage(res.response_data);
      }
    }, () => this.isLoading = false);
  }

  // verifies product by adding its total and checking the updated total with existing sub-total
  public verifyProductBeforeAdd(): void {
    if (this.orderData.order.orderFrom != OrderFromEnum.POS) {
      if (this.orderData.order.orderFrom == PaymentTypeEnum.STRIPE) {
        this.addToCartData.maximumAmount = this.orderData.order.amountRefundedOrderModified ? Number(this.orderData.order.amountRefundedOrderModified.toFixed(2)) : this.orderData.order.subTotal;
        if (this.addToCartData.productTotal > this.availableWalletAmount) {
          return this.utilService.errorMessage('SUB_TOTAL_ERROR', true, this.availableWalletAmount);
        }
        this.addProductToCart();
      } else {
        this.addProductToCart();
      }
    } else {
      this.addProductToCart();
    }
  }

  // calculate product total based on selected variant of quantity
  public calculateProductTotal() {
    if (!this.addToCartData.variant) {
      this.addToCartData = this.getDefaultAddToCartData();
      return;
    }
    this.addToCartData.dealAmount = 0;
    this.addToCartData.productTotal = this.addToCartData.variant.price * this.addToCartData.quantity;
    if (this.productDetails.isDealAvailable) {
      this.addToCartData.dealAmount = this.addToCartData.productTotal * Number((this.productDetails.dealPercent / 100).toFixed(2));
    };
    this.addToCartData.productTotal -= this.addToCartData.dealAmount;
  }

  // add new product
  private addProductToCart(): void {
    this.isLoading = true;
    const addProduct$ = this.orderData.order.orderFrom == OrderFromEnum.POS ? this.orderService.addNewProductToPOSOrder(this.orderId, this.addToCartData) : this.orderService.addNewProductToOrder(this.orderId, this.addToCartData);
    addProduct$.subscribe((res: any) => {
      this.isLoading = false;
      if (res.response_code === 200) {
        this.utilService.successMessage(res.response_data);
        this.closeAddToCartModal();
        this.getOrderDetails();
      } else {
        this.utilService.errorMessage(res.response_data);
      }
    }, () => this.isLoading = false);
  }

  // checks deleted products count before performing delete operation
  public checkProductCountBeforeDelete(productId: string): void {
    let allProducts: Array<any> = [...this.orderData.order.cart];
    let deletedProductCount = allProducts.filter(product => product.isProductDeleted === true).length;
    deletedProductCount++;
    if (deletedProductCount === this.orderData.order.cart.length) {
      if (confirm(this.utilService.getTranslatedMessage("ALL_ORDER_DELETE_MESSAGE"))) {
        this.deleteProduct(productId, true);
      }
    } else {
      if (confirm(this.utilService.getTranslatedMessage("CART_ITEM_DELETE_CONFIRMATION"))) {
        this.deleteProduct(productId, false);
      }
    }
  }

  // deletes product from cart
  private deleteProduct(productId: string, allDeleted: boolean): void {
    this.isLoading = true;
    const deleteOrder$ = this.orderData.order.orderFrom == OrderFromEnum.POS ? this.orderService.deletePOSOrderItem(this.orderId, productId) : this.orderService.deleteOrderItem(this.orderId, productId);
    deleteOrder$.subscribe((res: any) => {
      this.isLoading = false;
      if (res.response_code === 200) {
        this.utilService.successMessage(res.response_data);
        if (!allDeleted) {
          this.getOrderDetails();
        } else {
          this.navigateToOrderPage();
        }
      } else {
        this.utilService.errorMessage(res.response_data);
      }
    }, () => this.isLoading = false);
  }

  // sends order update notification to the customer
  public sendOrderUpdateNotification(): void {
    this.orderService.sendOrderUpdateNotification(this.orderId).subscribe((res: any) => {
      if (res.response_code === 200) {
        this.utilService.successMessage(res.response_data);
      } else {
        this.utilService.errorMessage(res.response_data);
      }
    });
  }
}
