import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';
import { FileUploadModule } from 'ng2-file-upload';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { CustomLoader } from '../custom-loader';
import { AdminService } from "./admin.service";
import { AddEditAdminComponent } from "./add-edit-admin/add-edit-admin.component";
import { SharedModule } from "../shared/shared.module";
import { AdminRoutingModule } from "./admin-routing.module";
import { UiSwitchModule } from 'ngx-ui-switch';

@NgModule({
	imports: [
		CommonModule, 
		FormsModule, 
		NgbModule, 
		UiSwitchModule,
		NgSelectModule, 
		NgxPaginationModule,
		FileUploadModule,
		TranslateModule.forChild({
			loader: {
				provide: TranslateLoader,
				useClass: CustomLoader,
				deps: [HttpClient]
			}
		}),
		AdminRoutingModule,
		SharedModule
	],
	declarations: [AdminComponent, AddEditAdminComponent],
	providers: [AdminService],
	exports: []
})

export class AdminModule {

}
