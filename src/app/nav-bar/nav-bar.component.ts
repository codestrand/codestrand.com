import { Component, OnInit } from '@angular/core';
import { NavBarItem } from './nav-bar-items';

@Component({
  selector: 'cs-nav-bar',
  template: `<div class="nav-bar">
          <a href="."><img src="./../../assets/images/brand/codestrand.svg" class="nav-bar-logo"></a>
              <div class="nav-bar-item" *ngFor="let NavBarItem of navBarItems">
                  <a href="{{NavBarItem.href}}">{{NavBarItem.name}}</a>
              </div>
            </div>`,
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {
  navBarItems: NavBarItem[] = [
    {
      name: 'About',
      href: '/#about',
    },
    {
      name: 'Team',
      href: '/#team',
    },
    {
      name: 'Values',
      href: '/#values',
    },
    {
      name: 'Contact',
      href: '/#contact',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
