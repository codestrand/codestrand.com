import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cs-about',
  template: `<div id="about" class="about">
    <h2>About us</h2>
    <div class="about__container">
      <div class="about__item">
        <p>We are blah blah and we do blah blah</p>
      </div>
      <div class="about__image">
        <img src="./../../assets/images/angular/angular_whiteTransparent.svg">
      </div>
    </div>
  </div>`,
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
