import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cs-values',
  template: `<div id="values" class="values">
    <h2>Values</h2>
  </div>`,
  styleUrls: ['./values.component.sass']
})
export class ValuesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
