import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  public messages: any = [
    {'id': 1, 'message': 'Hello, how are you?'},
    {'id': 2, 'message': 'Hello, how are you?'},
    {'id': 1, 'message': 'Hello, how are you?'},
    {'id': 1, 'message': 'Hello, how are you?'},
    {'id': 2, 'message': 'Hello, how are you?'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
