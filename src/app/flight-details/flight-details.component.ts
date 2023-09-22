import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css'],
})
export class FlightDetailsComponent {

  cards: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<string[]>('http://localhost:8080/Aircraft/allaircraft')
      .subscribe((data) => {
        console.log(data);
        this.cards = data;
      });
  }
}
