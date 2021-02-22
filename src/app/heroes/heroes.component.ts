import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  //hero = 'Hero Name'
  hero: Hero = {
    id: 1,
    name: 'Spiderman',
  };

  constructor() {}

  ngOnInit(): void {}
}
