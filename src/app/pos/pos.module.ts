import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbModule, NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { NgxPaginationModule } from "ngx-pagination";
import { CrudService } from "../../service/crud.service";
import { CategoryService } from "../categories/category.service";
import { CustomLoader } from "../custom-loader";
import { DeliveryBoyService } from "../delivery-boy/delivery-boy.service";
import { OrderService } from "../orders/order.service";
import { ProductService } from "../products/products.service";
import { SettingService } from "../settings/setting.service";
import { SharedModule } from "../shared/shared.module";
import { PosOrdersDetailsComponent } from "./pos-orders-details/pos-orders-details.component";
import { PosOrdersComponent } from "./pos-orders/pos-orders.component";
import { PosRoutingModule } from "./pos-routing.module";
import { PosComponent } from "./pos.component";

@NgModule({
  imports: [PosRoutingModule, NgbModule, FormsModule, CommonModule, NgbPaginationModule, TranslateModule.forChild({
    loader: {
      provide: TranslateLoader,
      useClass: CustomLoader,
      multi: true,
      deps: [HttpClient, CrudService]
    }
  }),
    NgSelectModule,
    SharedModule,
    NgxPaginationModule
  ],
  exports: [],
  declarations: [PosComponent, PosOrdersComponent, PosOrdersDetailsComponent],
  providers: [CategoryService, ProductService, SettingService, OrderService, DeliveryBoyService],
})
export class PosModule { }
