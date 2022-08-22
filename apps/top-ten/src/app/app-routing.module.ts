import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { VideogamesComponent } from './videogames/videogames.component';
import { WildComponent } from './wild/wild.component';

const routes: Routes = [
  { path: 'videogames', component: VideogamesComponent },
  { path: '', component: LoginComponent },
  { path: 'wild', component: WildComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/videogames' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
