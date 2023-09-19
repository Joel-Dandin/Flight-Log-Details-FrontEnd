import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightLogDetailsComponent } from './flight-log-details.component';

describe('FlightLogDetailsComponent', () => {
  let component: FlightLogDetailsComponent;
  let fixture: ComponentFixture<FlightLogDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightLogDetailsComponent]
    });
    fixture = TestBed.createComponent(FlightLogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
