import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent extends BaseComponent implements OnInit {

  constructor(private Spinner : NgxSpinnerService) {
    super(Spinner);
   }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.SquareJellyBox);   
  }
}
