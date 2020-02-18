import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcompaniesComponent } from './allcompanies.component';

describe('AllcompaniesComponent', () => {
  let component: AllcompaniesComponent;
  let fixture: ComponentFixture<AllcompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllcompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
