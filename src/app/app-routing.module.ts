import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchGistsComponent} from "./search-gists/search-gists.component";


const routes: Routes = [
  {path: 'search', component: SearchGistsComponent},
  {path: '', redirectTo: '/search', pathMatch: 'full'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
