import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

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

  clickedHero!: Hero[];

  constructor(private heroService: HeroService) {}

  onclick():void{
    this.heroService.getHeroes()
    .subscribe((h) => this.clickedHero = h);
  }

  ngOnInit(){
    this.onclick();
  }
}
