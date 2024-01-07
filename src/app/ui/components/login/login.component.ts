import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {

  constructor(private Spinner : NgxSpinnerService) {
    super(Spinner);
   }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.SquareJellyBox);   
  }

}
