import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddEditAdminComponent } from "./add-edit-admin/add-edit-admin.component";

const routes: Routes = [
	{
	  path: '',
	  component: AdminComponent,
	  data: {
		title: 'Admin'
	  }
	},
	{
	  path: 'add-admins',
	  component: AddEditAdminComponent,
	  data: {
		title: 'Add Admin'
	  }
	},
	{
	  path: 'edit-admins/:id',
	  component: AddEditAdminComponent,
	  data: {
		title: 'Edit Admin'
	  }
	},
  ];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AdminRoutingModule {
}
