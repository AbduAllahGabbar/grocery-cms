import { Component, OnInit } from '@angular/core';
import { AdminService } from "./admin.service";
import { UtilService } from "../../service/util.service";
export interface AdminModel {
	_id?: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	mobileNumber: string;
}
@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
	public adminList: Array<AdminModel> = [];
	public isLoading = false;
	public page: number = 0;
	public limit: number = 25;
	public total: number = 0;
	public search: string = '';
	constructor(
		private adminService: AdminService,
		private utilService: UtilService
	) {
		this.getAllAdmin()
	}


	ngOnInit(): void {
		
	}

	// Get all admin
	public getAllAdmin(): void {
		this.isLoading = true;
		this.adminService.getAll(this.page, this.limit, this.search).subscribe((res: any) => {
			this.isLoading = false;
			this.adminList = res.response_data;
			this.total = res.response_data.total;
		}, error => this.isLoading = false);
	}

	//status of Admin
	updateStatus(event, id) {
		const body = { status: event };
		this.isLoading = true;
		this.adminService.updateStatus(id, body).subscribe((res: any) => {
			this.isLoading = false;
			this.utilService.successMessage(res.response_data);
		}, error => this.isLoading = false);
	}


	// Pagination
	public pageChange(page: number): void {
		this.page = page;
		this.getAllAdmin();
	}

	//delete Admin
	deleteAdmin(adminId: string) {
		if (confirm(this.utilService.getAlertField())) {
			this.isLoading = true;
			this.adminService.deleteAdmin(adminId).subscribe((res: any) => {
				this.isLoading = false;
				this.utilService.successMessage(res.response_data);
				this.getAllAdmin();
			}, error => this.isLoading = false);
		}
	}
}
