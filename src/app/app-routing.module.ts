import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JugadoresListComponent } from './jugadores-list/jugadores-list.component';
//import { DetailsListComponent } from './details-list/details-list.component';


const routes: Routes = [
  {path:'',component: JugadoresListComponent}
  //{path:'Player/:playerId', component: DetailsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
