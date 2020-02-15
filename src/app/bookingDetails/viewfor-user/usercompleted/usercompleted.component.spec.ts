import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercompletedComponent } from './usercompleted.component';

describe('UsercompletedComponent', () => {
  let component: UsercompletedComponent;
  let fixture: ComponentFixture<UsercompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsercompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
