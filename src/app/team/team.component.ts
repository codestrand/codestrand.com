import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cs-team',
  template: `<div id="team" class="team">
    <h2>Team</h2>
    <div class="team__container">
      <div class="team__image_1">
        <img src="./../../assets/images/team/orestes.jpg">
        <h3>Orestes Carracedo</h3>
        <p>Text about Orestes</p>
      </div>
      <div class="team__image_2">
        <img src="./../../assets/images/team/ana.jpg">
        <h3>Ana Cidre</h3>
        <p>Text about Ana</p>
      </div>
    </div>
  </div>`,
  styleUrls: ['./team.component.sass']
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
