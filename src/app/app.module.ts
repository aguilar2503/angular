import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JugadoresListComponent } from './jugadores-list/jugadores-list.component';
import { DetailsListComponent } from './details-list/details-list.component';
import { JugadoresAlertsComponent } from './jugadores-alerts/jugadores-alerts.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    JugadoresListComponent,
    DetailsListComponent,
    JugadoresAlertsComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
