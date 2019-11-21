import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.less']
})
export class NgswitchComponent implements OnInit {
  current: string = 'b';

  constructor() { }

  ngOnInit() {
  }

}
