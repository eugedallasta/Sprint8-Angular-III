import { PilotComponent } from './components/pilot/pilot.component';
import { CardComponent } from './components/card/card.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'starships', component: ListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'card', component: CardComponent },
  { path: 'pilot', component: PilotComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
