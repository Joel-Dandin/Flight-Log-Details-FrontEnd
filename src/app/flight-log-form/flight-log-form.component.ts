import { Component } from '@angular/core';
import { catchError, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-flight-log-form',
  templateUrl: './flight-log-form.component.html',
  styleUrls: ['./flight-log-form.component.css']
})
export class FlightLogFormComponent {
  flightLog: {

    date__: string;
    departure: string;
    destination: string;
  } = {
      date__: '',
      departure: '',
      destination: ''
    };

  aircrafts: any[] = [];

  constructor(private http: HttpClient) { }


  onSubmit() {
    const formattedDate = new Date(this.flightLog.date__);
    this.flightLog.date__ = formattedDate.toISOString();

    const departureTime = new Date(`2000-01-01T${this.flightLog.departure}`);
    this.flightLog.departure = departureTime.toLocaleTimeString('en-US', { hour12: false });

    // Step 2: Send the form data to your backend for storage
    this.http.post('http://localhost:8080/save_flight_log', this.flightLog)
      .subscribe(() => {
        alert("Form data submitted successfully.")
        console.log('Form data submitted successfully.');

      }),
      catchError(error => {
        alert("Error Submitting Data")
        console.log('Error Submitting Data', error);
        return of([]);
      });
  }

  // ngOnInit(): void {
  //   this.fetchAircraftNames();
  // }
  // fetchAircraftNames() {
  //   this.http
  //     .get<string[]>('http://localhost:8080/listOfFlights')
  //     .subscribe((data) => {
  //       this.aircrafts = data;
  //     });
  // }
}
