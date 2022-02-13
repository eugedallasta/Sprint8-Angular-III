import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { PilotComponent } from './components/pilot/pilot.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActorsComponent } from './components/actors/actors.component';
import { FilmsComponent } from './components/films/films.component';
import { ActorFilmsComponent } from './components/actor-films/actor-films.component';
import { ActorStarshipsComponent } from './components/actor-starships/actor-starships.component';
import { PlanetsComponent } from './components/planets/planets.component';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CardComponent,
    HomeComponent,
    NavBarComponent,
    LoginComponent,
    PilotComponent,
    SignUpComponent,
    NotFoundComponent,
    ActorsComponent,
    FilmsComponent,
    ActorFilmsComponent,
    ActorStarshipsComponent,
    PlanetsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,


  ],
  exports: [
    ListComponent,
    CardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
