import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flight-details-card',
  templateUrl: './flight-details-card.component.html',
  styleUrls: ['./flight-details-card.component.css']
})
export class FlightDetailsCardComponent {
  @Input() flightData: any;
}
