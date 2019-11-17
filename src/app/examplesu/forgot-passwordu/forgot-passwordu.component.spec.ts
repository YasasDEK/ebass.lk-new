import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPassworduComponent } from './forgot-passwordu.component';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPassworduComponent;
  let fixture: ComponentFixture<ForgotPassworduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPassworduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPassworduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
