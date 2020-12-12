import {
  AfterContentInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { AppComponent } from "src/app/app.component";
import { Message } from "src/app/models/message";

@Component({
  selector: "message-item",
  templateUrl: "./message-item.component.html",
  styleUrls: ["./message-item.component.css"],
})
export class MessageItemComponent implements OnInit {
  @Input("message")
  message: Message;

  constructor() {}

  ngOnInit(): void {}
}
