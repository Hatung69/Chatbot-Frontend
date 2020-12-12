import { KEYWORD } from "./keyword";
import { AppComponent } from "./../../app.component";
import { ChatBotService } from "./../../services/chat-bot.service";
import { Input } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { Message } from "src/app/models/message";

import { debounceTime, map, distinctUntilChanged } from "rxjs/operators";
import { Observable } from "rxjs/internal/Observable";

@Component({
  selector: "message-form",
  templateUrl: "./message-form.component.html",
  styleUrls: ["./message-form.component.css"],
})
export class MessageFormComponent implements OnInit {
  @Input("message")
  message: Message = new Message("");

  @Input("messages")
  messages: Message[] = [];

  keyWord: string[] = KEYWORD;

  constructor(
    private chatBotService: ChatBotService,
    private appCompoent: AppComponent
  ) {}

  ngOnInit(): void {}
  isBlank(str) {
    return !str || /^\s*$/.test(str);
  }

  // Gửi tin
  public sendMessage(): void {
    //Check content message
    if (!this.message.content.trim()) {
      alert("Vui lòng nhập nội dung tin nhắn !");
      return;
    }
    this.message.timestamp = new Date();
    this.message.isBot = false;
    this.messages.push(this.message); // Mess từ phía User
    setTimeout(() => {
      this.scrollBottom();
    }, 0);
    this.chatBotService
      .getResponse(this.message.content)
      .pipe(
        // Time in milliseconds between key events
        debounceTime(1000),
        // If previous query is diffent from current
        distinctUntilChanged()
      )
      .subscribe(
        (response) => {
          response.content = this.urlify(response.content);
          console.log(response.content);
          this.messages.push(
            new Message(response.content, response.timestamp, true)
          );
          setTimeout(() => {
            this.scrollBottom();
          }, 0);
        },
        (error) => {
          console.log(error);
          this.scrollBottom();
        }
      );
    this.message = new Message("");
  }

  // Chuyển link về thành tag a
  urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function (url) {
      return (
        '<a target="_blank"href="' +
        url +
        '" class="text-primary fw-bold">' +
        url +
        "</a>"
      );
    });
    // or alternatively
    // return text.replace(urlRegex, '<a href="$1">$1</a>')
  }

  // Chuộn trang xuống
  scrollBottom() {
    this.appCompoent.chatList.nativeElement.scrollTop = this.appCompoent.chatList.nativeElement.scrollHeight;
  }

  public model: any;
  suggest = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      map((term) =>
        term.length < 2
          ? []
          : this.keyWord
              .filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1)
              .slice(0, 10)
      )
    );
}
