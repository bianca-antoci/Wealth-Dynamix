import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './features/people/people.component';

const routes: Routes = [{ path: 'people', component: PeopleComponent },

{ path: "", redirectTo: "people", pathMatch: "full" },
{ path: "**", redirectTo: "people" },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
