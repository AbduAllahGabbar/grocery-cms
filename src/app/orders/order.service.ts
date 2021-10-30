import { Injectable } from '@angular/core';
import { CrudService } from '../../service/crud.service';
import { Observable } from "rxjs";
import { POSOrderModel } from '../pos/pos.model';
import { AddToCartModel } from './orders.model';

@Injectable()
export class OrderService {
	constructor(private crud: CrudService) {
	}

	// Get all order
	public getAll(page: number, limit: number, status: string, id: string, type: string): Observable<any> {
		return this.crud.getData(`/orders/admin/list?page=${page}&limit=${limit}${status !== 'All' ? '&orderStatus=' + status : ''}${id ? ('&assignedToId=' + id) : ''}&type=${type}`)
	}

	// Gets all POS order
	public getAllPOSOrders(page: number, limit: number, status: string, id: string): Observable<any> {
		return this.crud.getData(`/orders/admin/pos-list?page=${page}&limit=${limit}${status !== 'All' ? '&orderStatus=' + status : ''}${id ? ('&assignedToId=' + id) : ''}`)
	}

	// Get order detail
	public getById(orderId: string): Observable<any> {
		return this.crud.getData(`/orders/admin/detail/${orderId}`);
	}

	// updates order status
	public updateStatus(orderId: string, data: any): Observable<any> {
		return this.crud.updateData(`/orders/admin/status-update/${orderId}`, data);
	}

	// Assign order to delivery boy
	public assignOrder(orderId: string, assignOrderData): Observable<any> {
		return this.crud.updateData(`/orders/admin/assign/delivery-boy/${orderId}`, assignOrderData);
	}

	// Export order
	public export(dateData): Observable<any> {
		return this.crud.saveData('/orders/admin/export-file', dateData);
	}

	// Check order export status
	public checkExportStatus(): Observable<any> {
		return this.crud.getData('/orders/admin/export-file/download');
	}

	// Delete export file
	public deleteExportFile(publicId: string): Observable<any> {
		return this.crud.deleteData(`/orders/admin/export-file/delete/${publicId}`);
	}

	// Order chart
	public getChart(): Observable<any> {
		return this.crud.getData('/orders/admin/charts');
	}

	// Delete order by orderId
	public delete(orderId: string): Observable<any> {
		return this.crud.deleteData(`/orders/admin/delete/${orderId}`)
	}

	// makes a POS order
	public placePOSOrder(orderData: POSOrderModel): Observable<any> {
		return this.crud.saveData('/orders/admin/pos-order', orderData);
	}

	// updates product item of an order
	public updateOrderItem(orderId: string, productInfo): Observable<any> {
		return this.crud.updateData(`/orders/admin/update/${orderId}`, productInfo);
	}

	// delete product from order
	public deleteOrderItem(orderId: string, productId: string): Observable<any> {
		return this.crud.deleteData(`/orders/admin/item-delete/${orderId}/${productId}`);
	}

	// adds new product to order
	public addNewProductToOrder(orderId: string, productData: AddToCartModel): Observable<any> {
		return this.crud.updateData(`/orders/admin/add-item/${orderId}`, productData);
	}

	// updates product item of a POS order
	public updatePOSOrderItem(orderId: string, productInfo): Observable<any> {
		return this.crud.updateData(`/orders/admin/pos/update/${orderId}`, productInfo);
	}

	// delete product from POS order
	public deletePOSOrderItem(orderId: string, productId: string): Observable<any> {
		return this.crud.deleteData(`/orders/admin/pos/item-delete/${orderId}/${productId}`);
	}

	// adds new product to POS order
	public addNewProductToPOSOrder(orderId: string, productData: AddToCartModel): Observable<any> {
		return this.crud.updateData(`/orders/admin/pos/add-item/${orderId}`, productData);
	}

	// gets maximum amount that can be used from users wallet
	public getMaximumWalletAmountToBeUsed(orderId: string): Observable<any> {
		return this.crud.getData(`/orders/admin/cut-off/${orderId}`);
	}

	// send order update notification to the customer
	public sendOrderUpdateNotification(orderId: string): Observable<any> {
		return this.crud.getData(`/orders/admin/notify-mail/${orderId}`);
	}

	// sends request to update the payment status of an order
	public updatePaymentStatus(orderId: string, body): Observable<any> {
		return this.crud.updateData(`/orders/admin/pos-payment-update/${orderId}`, body);
	}
}
