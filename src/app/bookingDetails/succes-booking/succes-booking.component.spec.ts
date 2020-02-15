import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesBookingComponent } from './succes-booking.component';

describe('SuccesBookingComponent', () => {
  let component: SuccesBookingComponent;
  let fixture: ComponentFixture<SuccesBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccesBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
