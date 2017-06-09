import { WebsocketService } from './websocket.service';
import { ChatService } from './chat.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/dom/webSocket';
import { WebSocketSubject, WebSocketSubjectConfig } from 'rxjs/observable/dom/WebSocketSubject';

@Component({
  selector: 'io-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'io';

  private ws: Subject<any>;

  private message =  'test';

  constructor(private chatService: ChatService,
              private websocketService: WebsocketService) {

    chatService.messages.subscribe(msg => {
      console.log('Response from websocket: ' + msg);
    });
  }

  sendMessage() {
    console.log('new message from client to websocket: ', this.message);
    this.chatService.messages.next(this.message);
    // this.message = '';
  }

  ngOnInit() {
  }

}
