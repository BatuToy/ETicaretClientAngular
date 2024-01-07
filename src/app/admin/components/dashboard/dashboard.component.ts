import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { AlertifyService, MessageType, PositionType } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BaseComponent implements OnInit {

  constructor(private alertify : AlertifyService , Spinner : NgxSpinnerService ) {
    super(Spinner);
   }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.SquareJellyBox);
  }

  m(){
    this.alertify.message("Deneme" , {
      messageType : MessageType.Error ,
      dismissOthers : false,
      position : PositionType.TopLeft,
      delay : 3
    });
  }

  d(){
    this.alertify.dismiss();
  }
}
