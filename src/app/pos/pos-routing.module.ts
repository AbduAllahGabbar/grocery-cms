import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosOrdersDetailsComponent } from './pos-orders-details/pos-orders-details.component';
import { PosOrdersComponent } from './pos-orders/pos-orders.component';
import { PosComponent } from './pos.component';

const routes: Routes = [
    {
        path: '',
        component: PosComponent,
        data: {
            title: 'Pos'
        }
    },
    {
        path: 'orders',
        component: PosOrdersComponent
    },
    {
        path: 'orders/details/:id',
        component: PosOrdersDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PosRoutingModule {
}
