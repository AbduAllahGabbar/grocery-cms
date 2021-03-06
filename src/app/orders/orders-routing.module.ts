import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './orders.component';
import { ViewOrderComponent } from "./view-order/view-order.component";
import { EditOrderComponent } from './edit-order/edit-order.component';
const routes: Routes = [
    {
        path: '',
        component: OrderComponent,
        data: {
            title: 'Orders'
        }
    },
    {
        path: 'view-order/:id',
        component: ViewOrderComponent,
        data: {
            title: 'View Order'
        }
    },
    {
        path: 'edit-order/:id',
        component: EditOrderComponent,
        data: {
            title: 'Edit Order'
        }
    },
    {
        path: 'deliveryBoy/:id',
        component: OrderComponent,
        data: {
            title: 'Order'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OrderRoutingModule { }
