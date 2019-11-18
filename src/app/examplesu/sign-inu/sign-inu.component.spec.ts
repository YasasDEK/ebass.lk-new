import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInuComponent } from './sign-inu.component';

describe('SignInComponent', () => {
  let component: SignInuComponent;
  let fixture: ComponentFixture<SignInuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignInuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
