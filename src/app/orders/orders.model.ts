import { POSCartModel } from '../pos/pos.model';
import { VariantModel } from '../products/products.model';
export interface OrderDetailModel {
	order: OrderModel;
	cart: CartModel;
	deliveryBoyRating: DeliveryBoyRatingModel;
}

export interface POSOrderDetailModel {
	order: OrderInfoModel;
	cart: CartModel;
	deliveryBoyRating: DeliveryBoyRatingModel;
}
export interface OrderInfoModel {
	isOrderAssigned: boolean;
	assignedToName: string;
	isAcceptedByDeliveryBoy: boolean;
	isWalletUsed: boolean;
	_id: string;
	subTotal: number;
	paymentStatus: string;
	tax: number;
	totalProduct: number;
	grandTotal: number;
	deliveryCharges: number;
	couponCode: string;
	couponAmount: number;
	address: AddressModel;
	user: UserModel;
	userId: string;
	paymentType: string;
	orderStatus: string;
	cartId: string;
	orderID: number;
	deliveryDate: string;
	deliveryTime: string;
	usedWalletAmount: number;
	amountRefunded: number;
	orderFrom: string;
	createdAt: string;
	updatedAt: string;
	products: Array<any>;
	transactionDetails: any;
	cart: Array<POSCartModel>;
	invoiceToken: string;
	currencyCode: string;
	currencySymbol: string;
	orderType: string;
}
export interface OrderModel {
	isOrderAssigned: boolean;
	assignedToName: string;
	isAcceptedByDeliveryBoy: boolean;
	isWalletUsed: boolean;
	_id: string;
	subTotal: number;
	paymentStatus: string;
	tax: number;
	totalProduct: number;
	grandTotal: number;
	deliveryCharges: number;
	couponCode: string;
	couponAmount: number;
	address: AddressModel;
	user: UserModel;
	userId: string;
	paymentType: string;
	orderStatus: string;
	cartId: string;
	orderID: number;
	deliveryDate: string;
	deliveryTime: string;
	usedWalletAmount: number;
	amountRefunded: number;
	orderFrom: string;
	createdAt: string;
	updatedAt: string;
	products: Array<any>;
	transactionDetails: any;
	cart: Array<CartProductModel> | Array<POSCartModel>;
	invoiceToken: string;
	currencyCode: string;
	currencySymbol: string;
	orderType: string;
	amountRefundedOrderModified: number;
	isOrderModified: boolean;
	isProductDeleted: boolean;
	shippingMethod: string;
	isSubscriptionOrder: boolean;
	deliveryInstruction: string;
}

export interface CartModel {
	products: Array<CartProductModel>
	productIds: Array<string>;
	couponAmount: number;
	walletAmount: number;
	isOrderLinked: boolean;
	subTotal: number;
	tax: number;
	grandTotal: number;
	deliveryCharges: number;
	taxInfo: TaxModel;
	couponCode: string;
	deliveryAddress: string;

}

export interface CartProductModel {
	productId: string;
	productName: string;
	unit: string;
	price: number;
	quantity: number;
	productTotal: number;
	imageUrl: number;
	filePath: number;
	dealAmount: number;
	dealTotalAmount: number;
	isDealAvailable: boolean;
	isProductDeleted: boolean;
	dealPercent: number;
	originalUnit: number;
	originalPrice: number;
	originalQuantity: number;
	originalProductTotal: number;
	originalDealAmount: number;
	isOrderModified: boolean;
	amountRefundedOrderModified: number;
}

export interface EditCartProductModel {
	product: CartProductModel;
	posOrderProduct: POSCartModel;
	modifiedVolume: string;
	modifiedPrice: number;
	modifiedQuantity: number;
	modifiedDealAmount: number;
	productTotal: number;
}

export interface TaxModel {
	taxName: string;
	amount: number;
}

export interface AddressModel {
	address: string;
	flatNo: string;
	postalCode: string;
	addressType: string;
	apartmentName: string;
	landmark: string;
	location: {
		latitude: number;
		longitude: number;
	};
}

export interface UserModel {
	firstName: string;
	lastName: string;
	mobileNumber: string;
	email: string;
	countryCode: string;
}

export interface DeliveryBoyRatingModel {
	rate: number;
	description: string;
	orderId: string;
	deliveryBoyId: string;
	userId: string;
}

export enum OrderFromEnum {
	POS = 'POS',
	MOBILE = 'USER_APP',
	WEBSITE = 'WEB_APP'
}

export interface AddToCartModel {
	productId: string;
	variant: VariantModel;
	quantity: number;
	maximumAmount: number;
	productTotal: number;
	dealAmount: number;
}

export enum PaymentTypeEnum {
	COD = 'COD',
	STRIPE = 'STRIPE'
}

export enum OrderTypesEnum {
	PURCHASES = 'PURCHASES',
	SUBSCRIPTIONS = 'SUBSCRIPTIONS'
}