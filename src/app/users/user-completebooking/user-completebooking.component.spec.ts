import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCompletebookingComponent } from './user-completebooking.component';

describe('UserCompletebookingComponent', () => {
  let component: UserCompletebookingComponent;
  let fixture: ComponentFixture<UserCompletebookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCompletebookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCompletebookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
