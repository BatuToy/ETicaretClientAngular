import { Component, OnInit } from '@angular/core';
import { AlertifyService, MessageType, PositionType } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private alertify : AlertifyService) { }

  ngOnInit(): void {}

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
