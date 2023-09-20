import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { FlightFormComponent } from './flight-form/flight-form.component';
import { FlightLogFormComponent } from './flight-log-form/flight-log-form.component';
import { FlightLogDetailsComponent } from './flight-log-details/flight-log-details.component';
import { FlightDetailsCardComponent } from './flight-details-card/flight-details-card.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FlightDetailsComponent,
    FlightFormComponent,
    FlightLogFormComponent,
    FlightLogDetailsComponent,
    FlightDetailsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
