import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { MessageItemComponent } from "./components/message-item/message-item.component";
import { Message } from "./models/message";

@Component({
  selector: "app-root",
  templateUrl: "../app/app.component.html",
  styleUrls: ["../app/app.component.css"],
})
export class AppComponent {
  @ViewChild("myDiv", { read: ElementRef }) chatList: ElementRef;

  public message: Message = new Message("");
  public messages: Message[];

  constructor() {
    this.messages = [
      new Message("Hi! mình có thể giúp gì cho bạn?", new Date(), true),
    ];
  }
}
