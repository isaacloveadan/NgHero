import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
// Http模块
import { HttpClientModule } from "@angular/common/http";
// 模拟http请求
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService } from "./in-memory-data.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { HighlightComponent } from './highlight/highlight.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  // 组件要先在这里声明
  // 声明属于本NgModule的组件、指令、管道
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    NgswitchComponent,
    HighlightComponent,
    HighlightDirective,
  ],
  // exports（导出表）：能在其他模块的组件模板中使用的可声明对象的子集
  imports: [
    BrowserModule,
    AppRoutingModule,
    // 要使用ngModel必须先导入FormsModule
    FormsModule,
    HttpClientModule,
    // forRoot配置方法接受一个InMemoryDataService类（初始内存数据库）作为参数
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  // 向全局服务中贡献的那些服务的创建器
  providers: [],
  // 应用的主视图 称为根组件 只有根模块才会设置这个bootstrap树形
  bootstrap: [AppComponent]
})
export class AppModule { }
