import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { PompeComponent } from './components/pompe/pompe.component';
import { PumpDetailsComponent } from './components/pompe/pump-details/pump-details.component';
import { PistoaleComponent } from './components/pistoale/pistoale.component';
import { DuzeComponent } from './components/duze/duze.component';
import { DuzeDetailsComponent } from './components/duze/duze-details/duze-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    PompeComponent,
    PumpDetailsComponent,
    PistoaleComponent,
    DuzeComponent,
    DuzeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
