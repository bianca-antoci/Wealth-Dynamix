import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './features/navigation/navigation.component';
import { HeaderComponent } from './features/header/header.component';
import { PeopleComponent } from './features/people/people.component';
import { FilmsComponent } from './features/films/films.component';
import { PlanetsComponent } from './features/planets/planets.component';
import { VehiclesComponent } from './features/vehicles/vehicles.component';
import { MovieComponent } from './features/people/movie/movie.component';
import { CharacterComponent } from './features/films/character/character.component';

@NgModule({
  declarations: [
    CharacterComponent,
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    PeopleComponent,
    FilmsComponent,
    VehiclesComponent,
    PlanetsComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
