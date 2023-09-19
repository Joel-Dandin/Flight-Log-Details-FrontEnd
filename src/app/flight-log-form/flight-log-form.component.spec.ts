import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightLogFormComponent } from './flight-log-form.component';

describe('FlightLogFormComponent', () => {
  let component: FlightLogFormComponent;
  let fixture: ComponentFixture<FlightLogFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightLogFormComponent]
    });
    fixture = TestBed.createComponent(FlightLogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
