import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

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
    onSubmit() {}
}
