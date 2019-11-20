import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from "../hero.service";

@Component({
  // 组件的选择器（css元素选择器）
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})
export class HeroesComponent implements OnInit {
  // 初始化hero数据为Hero类型
  heroes: Hero[];

  constructor(
    // 注入HeroService服务
    private heroService: HeroService
  ) { }

  // 生命周期钩子 创建完组件后就会调用ngOnInit 是放置初始化逻辑的地方
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    // 由于getHeroes返回的是Observable所以使用subscribe监听
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
    });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    // 创建一个类似Hero类型的对象
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      })
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
