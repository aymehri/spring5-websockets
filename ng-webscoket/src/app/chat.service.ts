import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { WebsocketService } from './websocket.service';

const CHAT_URL = 'ws://localhost:8080/reverse';

@Injectable()
export class ChatService {
  public messages: Subject<string>;

  constructor(wsService: WebsocketService) {
    this.messages = <Subject<string>>wsService
      .connect(CHAT_URL)
      .map((response: MessageEvent): string => {
        return response.data
      });
  }
}
