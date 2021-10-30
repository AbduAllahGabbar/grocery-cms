import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";
import { ProductReportComponent } from './product-report/product-report.component';
import { ReportService } from './report.service';
import { ChartsModule } from 'ng2-charts'
import { CategoryService } from '../categories/category.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { CustomLoader } from '../custom-loader';

// contains all report section routes
const REPORT_ROUTES: Routes = [
    { path: 'product-report', component: ProductReportComponent }
];

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule.forChild(REPORT_ROUTES), ChartsModule, TranslateModule.forChild({
        loader: {
            provide: TranslateLoader,
            useClass: CustomLoader,
            deps: [HttpClient]
        }
    }),],
    declarations: [ProductReportComponent],
    providers: [ReportService, CategoryService],
    exports: [RouterModule]
})
export class ReportModule {

}