import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserongoingComponent } from './userongoing.component';

describe('UserongoingComponent', () => {
  let component: UserongoingComponent;
  let fixture: ComponentFixture<UserongoingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserongoingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserongoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
