import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastr : ToastrService) { }

  message(message : string , title : string , options : Partial<ToastrOptions>){
      this.toastr[options.messageType](message , title,{
        positionClass : options.position
      });
  }

}

export class ToastrOptions{
  messageType : ToastrMessageType;
  position : ToastrPosition;
}
export enum ToastrMessageType {
  Success = "success", 
  Error = "error",
  Info = "info",
  Warning = "warning"
}

export enum ToastrPosition {
  TopRight = "toast-top-right",
  TopCenter = "toast-top-center",
  TopLeft = "toast-top-left",
  BottomRight = "toast-bottom-right",
  BottomLeft = "toast-bottom-left",
  TopFullWidth = "toast-top-full-width",
  BottomFullWidth = "toast-bottom-full-width",
  BottomCenter = "toast-bottom-center"
}
