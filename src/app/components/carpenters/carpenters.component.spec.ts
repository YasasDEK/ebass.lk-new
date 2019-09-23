import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpentersComponent } from './carpenters.component';

describe('CarpentersComponent', () => {
  let component: CarpentersComponent;
  let fixture: ComponentFixture<CarpentersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarpentersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
