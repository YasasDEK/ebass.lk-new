import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddshopsComponent } from './addshops.component';

describe('AddshopsComponent', () => {
  let component: AddshopsComponent;
  let fixture: ComponentFixture<AddshopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddshopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddshopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
