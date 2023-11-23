import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PompeComponent } from './components/pompe/pompe.component';
import { PumpDetailsComponent } from './components/pompe/pump-details/pump-details.component';
import { PistoaleComponent } from './components/pistoale/pistoale.component';
import { DuzeComponent } from './components/duze/duze.component';
import { DuzeDetailsComponent } from './components/duze/duze-details/duze-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'pompe',
    component: PompeComponent,
  },
  {
    path: 'pompe/:id', // 'id' is the route parameter
    component: PumpDetailsComponent, // Replace 'ChildComponent' with the actual component for your child route
  },
  {
    path: 'pistoale',
    component: PistoaleComponent,
  },
  {
    path: 'duze',
    component: DuzeComponent,
  },
  {
    path: 'duze/:id', // 'id' is the route parameter
    component: DuzeDetailsComponent, // Replace 'ChildComponent' with the actual component for your child route
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
