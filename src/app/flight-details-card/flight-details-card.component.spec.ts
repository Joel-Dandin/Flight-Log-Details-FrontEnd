import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightDetailsCardComponent } from './flight-details-card.component';

describe('FlightDetailsCardComponent', () => {
  let component: FlightDetailsCardComponent;
  let fixture: ComponentFixture<FlightDetailsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightDetailsCardComponent]
    });
    fixture = TestBed.createComponent(FlightDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
