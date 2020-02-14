import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNewbookingComponent } from './user-newbooking.component';

describe('UserNewbookingComponent', () => {
  let component: UserNewbookingComponent;
  let fixture: ComponentFixture<UserNewbookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNewbookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNewbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
