import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cs-contact',
  template: `<div id="contact" class="contact">
    <h2>Contact</h2>
    <div class="contact__container">
      <div class="contact__image">
        <img src="./../../assets/images/brand/codestrand-bw.svg">
      </div>
      <div class="contact__item">
        <p>We are blah blah and we do blah blah</p>
      </div>
    </div>
  </div>`,
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
