import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpendingComponent } from './userpending.component';

describe('UserpendingComponent', () => {
  let component: UserpendingComponent;
  let fixture: ComponentFixture<UserpendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserpendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
