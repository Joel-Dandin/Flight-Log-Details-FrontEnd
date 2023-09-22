import { Component } from '@angular/core';
import { catchError, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-flight-log-form',
  templateUrl: './flight-log-form.component.html',
  styleUrls: ['./flight-log-form.component.css'],
})
export class FlightLogFormComponent {
  flightLog: {
    aircraft_id: number;
    intdate: string;
    departure: string;
    destination: string;
  } = {
    aircraft_id: 0,
    intdate: '',
    departure: '',
    destination: '',
  };

  aircrafts: any[] = [];
  aircratft_name: string='';

  changeName() {
    this.aircratft_name = this.aircrafts.find(
      (log) => log.id === Number(this.flightLog.aircraft_id)
    )?.name;
  }

  constructor(private http: HttpClient) {}

  onSubmit() {
    const formattedDate = new Date(this.flightLog.intdate);
    this.flightLog.intdate = formattedDate.toISOString();

    const departureTime = new Date(`2000-01-01T${this.flightLog.departure}`);
    this.flightLog.departure = departureTime.toLocaleTimeString('en-US', {
      hour12: false,
    });

    // Step 2: Send the form data to your backend for storage
    this.http
      .post('http://localhost:8080/FlightLog/add', this.flightLog)
      .subscribe(() => {
        alert('Form data submitted successfully.');
        console.log('Form data submitted successfully.', this.flightLog);
      }),
      catchError((error) => {
        alert('Error Submitting Data');
        console.log('Error Submitting Data', error);
        return of([]);
      });
  }

  ngOnInit(): void {
    this.http
      .get<string[]>('http://localhost:8080/Aircraft/allaircraft')
      .subscribe((data) => {
        this.aircrafts = data;
        console.log(data);
      });
  }
}
