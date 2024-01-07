import { Injectable } from '@angular/core';
declare var alertify : any 
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { } 

  message(message : string, options : Partial<ALertifyOptions>) 
  {
    alertify.set('notifier' , 'delay' , options.delay);
    alertify.set('notifier' , 'position' , options.position);
    const msg = alertify[options.messageType](message);
    if(options.dismissOthers)
      msg.dismissOthers();
  }

  dismiss() {
    alertify.dismissAll();
  }
}

export class ALertifyOptions {
  messageType : MessageType = MessageType.Message;
  position : PositionType = PositionType.TopLeft;
  delay : number = 2;
  dismissOthers : boolean = false;
}

export enum MessageType 
{
  Error = "error",
  Message = "message",
  Notify = "notify",  
  Success = "success",
  Warning = "warning"
}
export enum PositionType {
  TopCenter = "top-center",
  TopRight = "top-right",
  TopLeft = "top-left",
  BottomLeft = "bottom-left",
  BottomRight = "bottom-right",
  BottomCenter = "bottom-center"
}
