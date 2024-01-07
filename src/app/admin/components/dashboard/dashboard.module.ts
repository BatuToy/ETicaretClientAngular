import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule ,
    NgxSpinnerModule,
    RouterModule.forChild([
      {path : "" , component : DashboardComponent}
    ])
  ]
})
export class DashboardModule { }
