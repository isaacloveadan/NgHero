import { Component } from '@angular/core';

@Component({
  // 是一个css选择器 一旦在模板 HTML 中找到了这个选择器对应的标签，就创建并插入该组件的一个实例
  selector: 'app-root',
  // 也可以使用template直接写入模板
  /*
  * template: `
  *   <h1>{{ title }}</h1>
  * `
  * */
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
