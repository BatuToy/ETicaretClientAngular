import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { OrderModule } from './order/order.module';
import { CustomerModule } from './customer/customer.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [],
  imports: [
    CommonModule ,
    ProductsModule ,
    OrderModule ,
    CustomerModule ,
    DashboardModule,
    NgxSpinnerModule
  ]
})
export class ComponentsModule { }
