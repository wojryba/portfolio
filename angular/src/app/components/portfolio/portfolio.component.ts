import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [
    trigger('enter', [
      transition(':enter', [
        style({opacity: 0}),
        animate('300ms', style({opacity: 1}))
      ])
    ])
  ]
})
export class PortfolioComponent implements OnInit {
  show = 'main';
  constructor() { }

  ngOnInit() {
  }

}
