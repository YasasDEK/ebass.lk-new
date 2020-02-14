import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOngoingbookingComponent } from './user-ongoingbooking.component';

describe('UserOngoingbookingComponent', () => {
  let component: UserOngoingbookingComponent;
  let fixture: ComponentFixture<UserOngoingbookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOngoingbookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOngoingbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
