import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './features/films/films.component';
import { PeopleComponent } from './features/people/people.component';
import { PlanetsComponent } from './features/planets/planets.component';
import { VehiclesComponent } from './features/vehicles/vehicles.component';

const routes: Routes = [
  { path: 'people', component: PeopleComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'planets', component: PlanetsComponent },

  { path: "", redirectTo: "people", pathMatch: "full" },
  { path: "**", redirectTo: "people" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
