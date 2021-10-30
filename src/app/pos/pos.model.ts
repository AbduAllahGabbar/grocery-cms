import { ProductModel, VariantModel } from "../products/products.model";

export interface POSCartModel {
    productId: string;
    productTitle: string;
    productPrice: number;
    quantity: number;
    imageUrl: string;
    filePath: string;
    dealId: string;
    dealPercent: number;
    dealAmount: number;
    productTotal: number;
    categoryId: string;
    subCategoryId: string;
    unit: string;
    isDealAvailable: boolean;
    originalUnit?: number;
    originalPrice?: number;
    originalQuantity?: number;
    originalProductTotal?: number;
    originalDealAmount?: number;
    isOrderModified?: boolean;
    amountRefundedOrderModified?: number;
    isProductDeleted?: boolean;
}

export enum OrderType {
    DELIVERY = 'DELIVERY',
    PICK_UP = 'PICK_UP'
}

export interface POSOrderModel {
    cart: Array<POSCartModel>;
    subTotal: number;
    tax: number;
    deliveryCharges: number;
    grandTotal: number;
    customerName: string;
    customerMobileNumber: string;
    customerEmail: string;
    deliveryAddress: string;
    orderType: string;
    channel: string;
    paymentType: string;
    deliverySlotId: string;
    cashCollected: boolean;
}

export enum ChangeQuantityEnum {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT'
}

export interface SelectedProductModel {
    variant: VariantModel;
    quantity: number;
    product: ProductModel;
}

export interface WorkingHoursModel {
    timings: Array<TimeScheduleModel>;
    _id: string;
    isClosed: boolean;
    date: string;
}

export interface TimeScheduleModel {
    _id: string;
    slot: string;
    isClosed: boolean
}