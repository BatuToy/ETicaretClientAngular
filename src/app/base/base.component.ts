import { NgxSpinnerService, Spinner } from 'ngx-spinner';

export class BaseComponent{
  constructor(private spinner : NgxSpinnerService){}

  showSpinner(spinnerNameType: SpinnerType){
    this.spinner.show(spinnerNameType);
    
    setTimeout(() => this.hideSpinner(spinnerNameType),750);
  }
  
  hideSpinner(spinnerNameType : SpinnerType){
    this.spinner.hide(spinnerNameType);
  }

}
export enum SpinnerType {
  SquareJellyBox = "S1",
  BallSpinCloclWiseFadeRotating = "S2",
  BallAtom = "S3"
}