import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from "./message.service";

// @Injectable将这个类标记为依赖注入系统的参与者
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    // hero服务中又注册了message服务
    private messageService: MessageService
  ) { }

  // 用of会返回一个Observable值
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
