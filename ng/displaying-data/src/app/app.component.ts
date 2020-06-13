import { Component } from '@angular/core';
import {Hero} from './hero'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // template:`<h1>{{title}}</h1>
  //           <h2>{{hero}}</h2>
  //           <ul>
  //             <li *ngFor ="let hero of heroes">
  //               {{hero}}
  //             </li>
  //           </ul>

  //           <p *ngIf="heroes.length>3">wow! so many heroes</p>
  //           `
})
export class AppComponent {
  title = 'displaying-data';
  hero = 'windstorm'
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];
  myHero = this.heroes[0];
  expression = 'ss'
  isUnchanged = false;
  constructor(){
    this.changeData()
  }

  changeData(){
    setTimeout(()=>{
      console.log(this)
      this.expression = 'wdwad';
    },3000)
  }  
  // title: string;
  // myHero: string;

  // constructor() {
  //   this.title = 'Tour of Heroes';
  //   this.myHero = 'Windstorm';
  // }

  con(item){
    console.log(item.value)
  }
}
