import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cs-hero',
  template: `
    <div class="container">
      <img src="/assets/images/brand/codestrand-standalone.svg" class="homepage-logo">
      <h1> We are <br> codestrand</h1>
    </div>`,
  styleUrls: ['./hero.component.sass']
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
