import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcompaniesComponent } from './addcompanies.component';

describe('AddcompaniesComponent', () => {
  let component: AddcompaniesComponent;
  let fixture: ComponentFixture<AddcompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
