import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FlightLogDetails, Flights } from './Model';

@Component({
  selector: 'app-flight-log-details',
  templateUrl: './flight-log-details.component.html',
  styleUrls: ['./flight-log-details.component.css'],
})
export class FlightLogDetailsComponent {
  flightLogs: FlightLogDetails[] = [];
  flights: Flights[] = [];
  searchValue:string ='';

  constructor(private http: HttpClient) {}



  ngOnInit() {
    this.fetchFlightLogs();
    this.fetchFlights();
  }

  fetchFlightLogs() {
    // Replace with your API endpoint for fetching flight logs
    this.http
      .get<FlightLogDetails[]>('http://localhost:8080/FlightLog/allflightLog')
      .subscribe((data) => {
        this.flightLogs = data;
        // console.log(data);
      });
  }
  fetchFlights() {
    // Replace with your API endpoint for fetching flight logs
    this.http
      .get<Flights[]>('http://localhost:8080/Aircraft/allaircraft')
      .subscribe((data) => {
        this.flights = data;
        // console.log(data);
      });
  }
}
