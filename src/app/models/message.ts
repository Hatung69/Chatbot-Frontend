export class Message {
  content: string;
  timestamp: Date;
  isBot: Boolean;

  constructor(content: string, timestamp?: Date, isBot?: Boolean) {
    this.content = content;
    this.timestamp = timestamp;
    this.isBot = isBot;
  }
}
