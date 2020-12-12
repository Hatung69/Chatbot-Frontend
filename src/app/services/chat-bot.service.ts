import { Message } from "./../models/message";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ChatBotService {
  private baseURL: string =
    "https://chatbot-backend-java.herokuapp.com/chat-api/v1/messages";
  // private baseURL: string = "http://localhost:8080/chat-api/v1/messages";

  constructor(private http: HttpClient) {}

  public getResponse(textAsk: string): Observable<any> {
    return this.http.post(this.baseURL, textAsk);
  }
}
