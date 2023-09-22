import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FlightLogDetails, Flights } from './Model';

@Component({
  selector: 'app-flight-log-details',
  templateUrl: './flight-log-details.component.html',
  styleUrls: ['./flight-log-details.component.css']
})
export class FlightLogDetailsComponent {
  flightLogs: FlightLogDetails[] = [];
  flights: Flights[] = [];
  constructor(private http: HttpClient) { }

   ngOnInit() {
    
    this.mergeData();
  }

  
   fetchFlightLogs() {
    // Replace with your API endpoint for fetching flight logs
     this.http.get<FlightLogDetails[]>('http://localhost:8080/FlightLog/allflightLog')
      .subscribe(data => {
        this.flightLogs = data;
        // console.log(data);
      });     
  }
   fetchFlights() {
    // Replace with your API endpoint for fetching flight logs
     this.http.get<Flights[]>('http://localhost:8080/Aircraft/allaircraft')
      .subscribe(data => {
        this.flights = data;
        // console.log(data);
      });     
  }
   mergeData(){

      this.fetchFlightLogs(),
      this.fetchFlights() 
    console.log("data 1 is",this.flightLogs, "data 2 is ",this.flights );
    const merged = this.flights.map(flight => {
      const flightLog = this.flightLogs.find(log => log.aircraft_id === Number(flight.aircraft_id));
      return {
        'Flight Log ID': flight.aircraft_id, 
        'Aircraft ID': flight.id,
        'Date': flight.date,
        Departure: flight.departure,
        Destination: flight.destination, 
        'Aircraft Name': flightLog?.aircraftName,
        'Serial Number': flightLog?.aircraftSerialNumber
      }
    });
    console.log(merged);
  }
}
