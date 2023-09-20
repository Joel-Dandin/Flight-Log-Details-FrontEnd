import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FlightLogDetails } from './Model';

@Component({
  selector: 'app-flight-log-details',
  templateUrl: './flight-log-details.component.html',
  styleUrls: ['./flight-log-details.component.css']
})
export class FlightLogDetailsComponent {
  flightLogs: FlightLogDetails[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchFlightLogs();
  }

  fetchFlightLogs() {
    // Replace with your API endpoint for fetching flight logs
    this.http.get<FlightLogDetails[]>('http://localhost:8080/all-flight-logs')
      .subscribe(data => {
        this.flightLogs = data;
      });

      console.log(this.flightLogs);
  }
}
