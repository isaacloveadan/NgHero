import { Component } from '@angular/core';

@Component({
  // 是一个css选择器 一旦在模板 HTML 中找到了这个选择器对应的标签，就创建并插入该组件的一个实例
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
