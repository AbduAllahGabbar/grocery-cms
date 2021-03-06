import { Component, OnInit, TemplateRef } from '@angular/core';
import { OrderService } from './order.service';
import { DeliveryBoyModel } from '../delivery-boy/delivery-boy.component';
import { forkJoin } from "rxjs";
import { DeliveryBoyService } from "../delivery-boy/delivery-boy.service";
import { SettingService } from "../settings/setting.service";
import { UtilService } from "../../service/util.service";
import { OrderModel, OrderTypesEnum } from "./orders.model";
import { ActivatedRoute, Router } from "@angular/router";
import { ShippingMethodEnum } from '../settings/delivey&Tax/delivery-tax.component';

@Component({
	selector: 'app-orders',
	templateUrl: './orders.component.html',
	styleUrls: ['./orders.component.scss']
})
export class OrderComponent implements OnInit {
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
	public isSubscriptionOrder: boolean = false;			// set to true if url includes subscription-orders
	public type: string = null;			// contains order type based on router url
	public shippingMethodList = ShippingMethodEnum;			// contains shipping methods list

	constructor(
		private utilService: UtilService,
		private orderService: OrderService,
		private deliveryBoyService: DeliveryBoyService,
		private settingsService: SettingService,
		private route: ActivatedRoute,
		private router: Router
	) {
		this.isSubscriptionOrder = this.router.url.includes('subscription-orders');
		this.type = this.isSubscriptionOrder ? OrderTypesEnum.SUBSCRIPTIONS : OrderTypesEnum.PURCHASES;
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
		this.orderService.getAll(this.page, this.limit, this.selectedStatus, this.assignedToId, this.type).subscribe((res: any) => {
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
}
