import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cs-team',
  template: `<div id="team" class="team">
    <h2>Team</h2>
  </div>`,
  styleUrls: ['./team.component.sass']
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
