import { Component, OnInit } from '@angular/core';
import { OrderService } from 'app/orders/order.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { OrderDetailModel } from "../orders.model";
import { ShippingMethodEnum } from '../../settings/delivey&Tax/delivery-tax.component';

@Component({
	selector: 'app-view-order',
	templateUrl: './view-order.component.html',
	styleUrls: ['./view-order.component.scss']
})
export class ViewOrderComponent implements OnInit {
	public isLoading = false;
	public order: OrderDetailModel;
	private orderId: string;
	public shippingMethods = ShippingMethodEnum;			// contains list of shipping methods
	constructor(
		private route: ActivatedRoute,
		private orderService: OrderService
	) {
		this.route.params.subscribe((response: any) => {
			this.orderId = response.id;
			if (this.orderId)  this.getOrderDetail();
		});
	}

	ngOnInit() {
	}

	// gets order details
	private getOrderDetail():void {
		this.isLoading = true;
		this.orderService.getById(this.orderId).subscribe((res: any) => {
			this.isLoading = false;
			this.order = res.response_data;
		}, error => this.isLoading = false);
	}

	// Open order invoice
	public openInvoice(): void {
		const url = `${environment.API_ENDPOINT}/orders/admin/invoice/${this.orderId}?token=${this.order.order.invoiceToken}`;
		window.open(url, 'blank');
	}
}
