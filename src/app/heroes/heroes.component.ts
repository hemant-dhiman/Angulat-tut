import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService} from '../message.service';

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


  //heroes = HEROES;

  heroes?: Hero[];

  clickedHero?: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) {}

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe((h) => this.heroes = h);
  }

  onClick(hero: Hero):void{
    this.clickedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
