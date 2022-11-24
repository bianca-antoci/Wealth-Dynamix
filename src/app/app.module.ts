import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './features/navigation/navigation.component';
import { HeaderComponent } from './features/header/header.component';
import { PeopleComponent } from './features/people/people.component';
import { FilmsComponent } from './features/films/films.component';
import { VeiclesComponent } from './features/veicles/veicles.component';
import { PlanetsComponent } from './features/planets/planets.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    PeopleComponent,
    FilmsComponent,
    VeiclesComponent,
    PlanetsComponent
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
