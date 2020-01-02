import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllworkersComponent } from './allworkers.component';

describe('AllworkersComponent', () => {
  let component: AllworkersComponent;
  let fixture: ComponentFixture<AllworkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllworkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllworkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
