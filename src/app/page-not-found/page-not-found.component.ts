import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Location } from "@angular/common";
import { __values } from 'tslib';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  currentRoute?: string;

  ngOnInit(): void {
    this.route.url.subscribe(e=>this.currentRoute=e.toString());
  }

}
