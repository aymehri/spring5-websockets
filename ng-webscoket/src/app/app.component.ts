import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'io-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'io';

  exampleSocket = new WebSocket('ws://localhost:8080/reverse');

  constructor() { }

  ngOnInit() {
    this.exampleSocket.onmessage = function (event) {
      console.log(event.data);
    }
  }

  sendMessage(): void {
    this.exampleSocket.send('text');
  }
}
