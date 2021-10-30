import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { UtilService } from '../../../service/util.service';
import { OrderService } from '../../orders/order.service';
import { OrderFromEnum, POSOrderDetailModel } from '../../orders/orders.model';
import { OrderType } from '../pos.model';

@Component({
	selector: 'app-pos-orders-details',
	templateUrl: './pos-orders-details.component.html',
	styleUrls: ['./pos-orders-details.component.scss']
})
export class PosOrdersDetailsComponent implements OnInit {
	public isLoading = false;
	public order: POSOrderDetailModel;
	private orderId: string;
	public orderTypes = OrderType;			// contains list of order types
	public orderChannels = OrderFromEnum;			// contains list of channels
	constructor(
		private route: ActivatedRoute,
		private orderService: OrderService,
		private utilService: UtilService
	) {
		this.route.params.subscribe((response: any) => {
			this.orderId = response.id;
			if (this.orderId) this.getOrderDetail();
		});
	}

	ngOnInit() {
	}

	// gets order details
	private getOrderDetail(): void {
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

	// updates payment status
	public updatePaymentStatus(): void {
		const body = {
			cashCollected: true
		};
		this.orderService.updatePaymentStatus(this.orderId, body).subscribe((res: any) => {
			this.utilService.successMessage(res.response_data);
			this.getOrderDetail();
		});
	}

}
