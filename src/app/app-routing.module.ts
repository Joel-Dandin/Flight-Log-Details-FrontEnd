import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { FlightFormComponent } from './flight-form/flight-form.component';
import { FlightLogDetailsComponent } from './flight-log-details/flight-log-details.component';
import { FlightLogFormComponent } from './flight-log-form/flight-log-form.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'FlightDetails', component: FlightDetailsComponent},
  { path: 'FlightForm', component: FlightFormComponent },
  { path: 'FlightLogDetails', component: FlightLogDetailsComponent },
  { path: 'FlightLogForm', component: FlightLogFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
