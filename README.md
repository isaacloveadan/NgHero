# NgHero
A NG DEMO FOR MYSELF

## FIRST
安装Angular CLI来创建项目、生成应用和库代码，以及执行各种持续开发任务，比如测试、打包和部署
```shell script
npm install -g @angular/cli
```

## SECOND
生成新组建命令
```shell script
ng generate component $componentName
```

## THIRD
生成服务命令
```shell script
ng generate service $serviceName
```

## FOURTH
在 Angular 中，最好在一个独立的顶级模块中加载和配置路由器，它专注于路由功能，然后由根模块 AppModule 导入它。

按照惯例，这个模块类的名字叫做 AppRoutingModule，并且位于 src/app 下的 app-routing.module.ts 文件中。
```shell script
ng generate module app-routing --flat --module=app
```
--flat 把这个文件放进了 src/app 中，而不是单独的目录中。
--module=app 告诉 CLI 把它注册到 AppModule 的 imports 数组中。

## class
```angular2html
// badCurly有值后会替换原来class
<div class="bad curly special" [class]="badCurly">Bad curly</div>

// isSpecial为真时会加上special的class类 反之亦然
<div [class.special]="isSpecial">The class binding is special</div>

// component.ts
setCurrentClasses() {
  this.currentClasses =  {
    'saveable': this.canSave,
    'modified': !this.isUnchanged,
    'special':  this.isSpecial
  };
}
// component.html
// 通过ngClass绑定对象 对象value为true则应用对应key的class名
<div [ngClass]="currentClasses">This div is initially saveable, unchanged, and special</div>
```

## style
```angular2html
<button [style.background-color]="canSave ? 'cyan': 'grey'" >Save</button>

// 带有单位的样式
<button [style.font-size.%]="!isSpecial ? 150 : 50" >Small</button>

// component.ts
setCurrentStyles() {
  this.currentStyles = {
    'font-style':  this.canSave      ? 'italic' : 'normal',
    'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
    'font-size':   this.isSpecial    ? '24px'   : '12px'
  };
}
// component.html
<div [ngStyle]="currentStyles">
  This div is initially italic, normal weight, and extra large (24px).
</div>
```

## ngModel双向绑定
要使用ngModel需要先导入FormsModule 并添加到NgModule的imports列表中

## ngFor
ngFor 指令有时候会性能较差，特别是在大型列表中。 对一个条目的一丁点改动、移除或添加，都会导致级联的 DOM 操作。
如果给它指定一个 trackBy，Angular 就可以避免这种折腾。 往组件中添加一个方法，它会返回 NgFor应该追踪的值。 在这里，这个值就是英雄的 id。
```angular2html
// component.html
<div *ngFor="let hero of heroes; trackBy: trackByHeroes">
  ({{hero.id}}) {{hero.name}}
</div>

// component.ts
trackByHeroes(index: number, hero: Hero): number { return hero.id; }
```

## ngSwitch
NgSwitch 实际上包括三个相互协作的指令：NgSwitch、NgSwitchCase 和 NgSwitchDefault
```angular2html
// 根据currentHero.emotion的值是否为happy sad confused来控制dom结构 default为都不匹配时显示
<div [ngSwitch]="currentHero.emotion">
  <app-happy-hero    *ngSwitchCase="'happy'"    [hero]="currentHero"></app-happy-hero>
  <app-sad-hero      *ngSwitchCase="'sad'"      [hero]="currentHero"></app-sad-hero>
  <app-confused-hero *ngSwitchCase="'confused'" [hero]="currentHero"></app-confused-hero>
  <app-unknown-hero  *ngSwitchDefault           [hero]="currentHero"></app-unknown-hero>
</div>
```

## 模板引用变量(#var)
```angular2html
// 使用井号 (#) 来声明引用变量。 #phone 的意思就是声明一个名叫 phone 的变量来引用 <input> 元素。
// 你可以在模板中的任何地方引用模板引用变量。 比如声明在 <input> 上的 phone 变量就是在模板另一侧的 <button> 上使用的。
<input #phone placeholder="phone number">

<button (click)="callPhone(phone.value)">Call</button>
```

## 安全导航操作符（?.）和空属性路径
```angular2html
// 当 currentHero 为空时，保护视图渲染器，让它免于失败
The current hero's name is {{currentHero?.name}}
```

## 生命周期
1.ngOnInit()是组件获取初始数据的好地方

2.ngOnDestroy()一些清理逻辑必须在 Angular 销毁指令之前运行，把它们放在 ngOnDestroy() 中

3.ngOnChanges(changes: SimpleChanges)一旦检测到该组件(或指令)的输入属性发生了变化,ngOnChanges() 方法获取了一个对象，它把每个发生变化的属性名都映射到了一个SimpleChange对象

## 通过setter截听@Input属性值的变化
```angularjs
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-name-child',
  template: '<h3>"{{name}}"</h3>'
})
export class NameChildComponent {
  private _name = '';

  // 通过设置@Input属性的set get对数据进行处理
  @Input()
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }

  get name(): string { return this._name; }
}
```
