import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { ValuesComponent } from './values/values.component';
import { ContactComponent } from './contact/contact.component';
import { FoundationComponent } from './foundation/foundation.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NavBarComponent,
    AboutComponent,
    TeamComponent,
    ValuesComponent,
    ContactComponent,
    FoundationComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
