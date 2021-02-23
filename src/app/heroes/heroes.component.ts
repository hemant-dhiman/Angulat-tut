import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  //hero = 'Hero Name'
  hero: Hero = {
    id: 1,
    name: 'Spider-man',
  };

  heroes = HEROES;

  clickedHero?: Hero;
  
  onClick(hero: Hero): void{
    this.clickedHero = hero;
  }

  constructor() {}

  ngOnInit(): void {}
}
