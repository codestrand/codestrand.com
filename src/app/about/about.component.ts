import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cs-about',
  template: `<div id="about" class="about">
    <h2>About us</h2>
  </div>`,
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
