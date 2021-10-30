import { Injectable } from "@angular/core";
import { CrudService } from "../../service/crud.service";
import { Observable } from "rxjs";
import { AdminModel } from './admin.component';

@Injectable()
export class AdminService {
	constructor(
		private crud: CrudService
	) {
	}
	// Get all admin
	public getAll(page: number, limit: number, search?: string): Observable<any> {
		return this.crud.getData(`/users/super-admin/list-admin?page=${page}&limit=${limit}&q=${search}`);
	}
	// Save admin
	public save(admin: AdminModel): Observable<any> {
		return this.crud.saveData('/users/super-admin/create/admin', admin);
	}
	// Update admin  status
	public updateStatus(userId: string, statusData): Observable<any> {
		return this.crud.updateData(`/users/super-admin/status-update/${userId}`, statusData);
	}

	// delete admin boy 
	public deleteAdmin(userId: string): Observable<any> {
		return this.crud.deleteData(`/users/super-admin/delete/${userId}`);
	}
}
