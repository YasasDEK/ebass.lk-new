import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVerifyEmailComponent } from './admin-verify-email.component';

describe('AdminVerifyEmailComponent', () => {
  let component: AdminVerifyEmailComponent;
  let fixture: ComponentFixture<AdminVerifyEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVerifyEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVerifyEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
