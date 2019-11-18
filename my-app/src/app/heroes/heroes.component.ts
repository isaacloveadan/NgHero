import { Component, OnInit } from '@angular/core';

@Component({
  // 组件的选择器（css元素选择器）
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  // 生命周期钩子 创建完组件后就会调用ngOnInit 是放置初始化逻辑的地方
  ngOnInit() {
  }

}
