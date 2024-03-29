import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule ,
    NgxSpinnerModule,
    RouterModule.forChild([
      {path : "" , component : ProductsComponent}
    ])
  ]
})
export class ProductsModule { }
