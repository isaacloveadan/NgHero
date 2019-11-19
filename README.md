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
