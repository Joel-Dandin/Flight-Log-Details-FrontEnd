import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.css']
})
export class FlightFormComponent {
  flight: {
      name: string;
      description: string;
      serial_number: string;
    } = {
      name: "",
      description: "",
      serial_number: "",
    };
    constructor(private http: HttpClient) { }
    onSubmit() {
      this.http.post('http://localhost:8080/Aircraft/add', this.flight)
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
}
