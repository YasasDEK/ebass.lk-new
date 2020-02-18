import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyimageComponent } from './companyimage.component';

describe('CompanyimageComponent', () => {
  let component: CompanyimageComponent;
  let fixture: ComponentFixture<CompanyimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
