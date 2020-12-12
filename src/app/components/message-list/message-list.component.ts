import { MessageItemComponent } from "./../message-item/message-item.component";
import { Message } from "../../models/message";
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  QueryList,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "message-list",
  templateUrl: "./message-list.component.html",
  styleUrls: ["./message-list.component.css"],
})
export class MessageListComponent implements OnInit {
  @Input("messages")
  messages: Message[];

  chatItems: QueryList<MessageItemComponent>;

  constructor() {}

  ngOnInit(): void {}
}
