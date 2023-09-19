import { Component } from '@angular/core';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css'],
})
export class FlightDetailsComponent {
  cards = [
    {
      id: '1',
      name: 'Delta',
      description: 'This a big aircraft',
      serial_number: '1',
    },
    {
      id: '2',
      name: 'Beta',
      description: 'This a big aircraft',
      serial_number: '1',
    },
    {
      id: '3',
      name: 'Delta3',
      description: 'This a big aircraft',
      serial_number: '1',
    },
    {
      id: '4',
      name: 'Delta4',
      description: 'This a big aircraft',
      serial_number: '1',
    },
    {
      id: '5',
      name: 'Delta5',
      description: 'This a big aircraft',
      serial_number: '1',
    },
  ];
}
