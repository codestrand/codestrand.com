import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cs-hero',
  template: `
    <div class="container">
      <img src="/assets/images/brand/codestrand.svg" class="homepage-logo">
      <h2>Software development</h2>
    </div>`,
  styleUrls: ['./hero.component.sass']
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
