import { Component, OnInit } from '@angular/core';
import {Hero} from './../hero'
import { HEROES } from './../mock-heroes'

import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero = Heroe
  hero:Hero[];



  constructor(private heroService:HeroService,private messageService:MessageService) { 
    console.log(this.hero);
  }
 
  ngOnInit():void {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.hero = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(item => {
        this.hero.push(item);
      });
  }

  delete(item: Hero): void {
    this.hero = this.hero.filter(h => h !== item);
    this.heroService.deleteHero(item).subscribe();
  }
}
