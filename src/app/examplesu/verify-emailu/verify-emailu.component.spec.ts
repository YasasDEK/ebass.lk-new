import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyEmailuComponent } from './verify-emailu.component';

describe('VerifyEmailComponent', () => {
  let component: VerifyEmailuComponent;
  let fixture: ComponentFixture<VerifyEmailuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyEmailuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyEmailuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
