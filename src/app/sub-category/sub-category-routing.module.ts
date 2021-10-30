import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubCategoryComponent } from './sub-category.component';
import { AddEditSubCategoryComponent } from './add-edit-subcategory/add-edit-subcategory.component';

const routes: Routes = [
	{
		path: '',
		component: SubCategoryComponent,
		data: {
			title: 'Categories'
		}
	},
	{
		path: 'add-subcategory',
		component: AddEditSubCategoryComponent,
		data: {
			title: 'Add subcategory'
		}
	},
	{
		path: 'edit-subcategory/:id',
		component: AddEditSubCategoryComponent,
		data: {
			title: 'Edit subcategory'
		}
	},

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SubCategoryRoutingModule {
}
