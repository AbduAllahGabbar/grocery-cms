import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from '../../../service/util.service';
import { DeliveryBoyModel } from '../../delivery-boy/delivery-boy.component';
import { DeliveryBoyService } from '../../delivery-boy/delivery-boy.service';
import { OrderService } from '../../orders/order.service';
import { OrderModel } from '../../orders/orders.model';
import { SettingService } from '../../settings/setting.service';
import { OrderType } from '../pos.model';

@Component({
	selector: 'app-pos-orders',
	templateUrl: './pos-orders.component.html',
	styleUrls: ['./pos-orders.component.scss']
})
export class PosOrdersComponent implements OnInit {
	public isLoading = false;
	public orders: Array<OrderModel> = [];
	public deliveryBoys: Array<DeliveryBoyModel> = [];
	public page: number = 1;
	public limit: number = 25;
	public total: number = 0;
	public currencySymbol: string = null;
	public orderId: string = null;
	public selectedStatus: string = 'All';
	public assignedToId: string = '';
	public orderTypes = OrderType;			// contains list of order types

	constructor(
		private utilService: UtilService,
		private orderService: OrderService,
		private deliveryBoyService: DeliveryBoyService,
		private settingsService: SettingService,
		private route: ActivatedRoute
	) {
		if (this.route.snapshot.params.id) {
			this.assignedToId = this.route.snapshot.params.id;
		}
		this.getAllOrder();
		this.getAllDeliveryBoy();
	}

	ngOnInit() {
	}

	// Get all delivery boys
	public getAllDeliveryBoy(): void {
		this.isLoading = true;
		this.deliveryBoyService.getAll(0, 100, '').subscribe((res: any) => {
			this.isLoading = false;
			this.deliveryBoys = res.response_data || [];
		}, error => this.isLoading = false);
	}

	// Get all order
	private getAllOrder(): void {
		this.isLoading = true;
		this.orderService.getAllPOSOrders(this.page, this.limit, this.selectedStatus, this.assignedToId).subscribe((res: any) => {
			this.isLoading = false;
			this.orders = res.response_data || [];
			this.total = res.total || 0;
		}, error => this.isLoading = false);
	}

	// Pagination
	public pageChange(page: number): void {
		this.page = page;
		this.getAllOrder();
	}

	// Update status
	public updateStatus(event, Id): void {
		const update: any = { orderId: Id, status: event.target.value };
		this.isLoading = true;
		this.orderService.updateStatus(Id, update).subscribe((res: any) => {
			this.isLoading = false;
			this.utilService.successMessage(res.response_data);
			this.getAllOrder();
		}, error => this.isLoading = false);
	}

	// Assign order to delivery boy
	public assignOrder(orderId: string, deliveryBoyId: string): void {
		const body = { deliveryBoyId: deliveryBoyId };
		this.isLoading = true;
		this.orderService.assignOrder(orderId, body).subscribe((res: any) => {
			this.isLoading = false;
			this.utilService.successMessage(res.response_data);
			this.getAllOrder();
		}, error => this.isLoading = false);
	}

	// Delete order by orderId
	public deleteOrder(orderId: string): void {
		if (confirm(this.utilService.getAlertField())) {
			this.isLoading = true;
			this.orderService.delete(orderId).subscribe((res: any) => {
				this.isLoading = false;
				this.utilService.successMessage(res.response_data);
				this.getAllOrder();
			}, error => this.isLoading = false);
		}
	}

	// Filter order by status
	public filterByStatus(): void {
		this.page = 1;
		this.getAllOrder();
	}

	// updates payment status
	public updatePaymentStatus(orderId: string): void {
		const body = {
			cashCollected: true
		};
		this.orderService.updatePaymentStatus(orderId, body).subscribe((res: any) => {
			this.utilService.successMessage(res.response_data);
			this.getAllOrder();
		});
	}

}
