import { Component, OnInit } from '@angular/core';
import { MessageService } from "../message.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.less']
})
export class MessagesComponent implements OnInit {

  constructor(
    // 由于会在模板中使用messageService所以将服务注册为public
    public messageService: MessageService
  ) { }

  ngOnInit() {
  }

}
