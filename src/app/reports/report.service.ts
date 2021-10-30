import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { CrudService } from '../../service/crud.service';
import { GraphTypeModel } from './product-report/product-report.component';

export enum GraphTypeEnum {
    SALES = '/orders/admin/sales-graph',
    CATEGORY = '/orders/admin/category-mode-graph',
    PRODUCT = '/orders/admin/product-mode-graph',
    TOP_SELLER = '/orders/admin/table-mode/top-product',
    PAYMENT_TYPE = '/orders/admin/payment-mode-graph',
    USER_REGISTRATION = '/orders/admin/user-graph'
}

@Injectable()
export class ReportService {
    constructor(private crud: CrudService) {

    }

    // PRODUCTS REPORT API'S

    // gets sales graph data based on graph type
    public getSalesGraph(url: string, filterObj: GraphTypeModel): Observable<any> {
        return this.crud.saveData(url, filterObj);
    }
}