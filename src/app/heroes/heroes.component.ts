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

  onclick(): void {
    this.heroService.getHeroes().subscribe((h) => (this.clickedHero = h));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.clickedHero.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.clickedHero = this.clickedHero.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  ngOnInit() {
    this.onclick();
  }
}
