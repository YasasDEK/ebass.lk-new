import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpuComponent } from './sign-upu.component';

describe('SignUpuComponent', () => {
  let component: SignUpuComponent;
  let fixture: ComponentFixture<SignUpuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
