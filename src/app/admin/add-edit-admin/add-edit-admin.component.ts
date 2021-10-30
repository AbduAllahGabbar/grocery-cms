import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UtilService } from "../../../service/util.service";
import { AdminService } from '../admin.service';
import { AdminModel } from '../admin.component';

@Component({
	selector: 'app-add-edit-admin',
	templateUrl: './add-edit-admin.component.html',
	styleUrls: ['./add-edit-admin.component.scss'],
})
export class AddEditAdminComponent {
	public isLoading = false;
	public admin: AdminModel = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		mobileNumber: '',
	}

	constructor(
		private router: Router,
		private utilService: UtilService,
		private adminService: AdminService,
	) {

	}

	// save admin details
	public saveAdmin(): void {
		this.isLoading = true;
		this.adminService.save(this.admin).subscribe((res: any) => {
			this.isLoading = false;
			this.utilService.successMessage(res.response_data);
			this.router.navigate(['/admins']);
		}, error => this.isLoading = false);
	}

}
