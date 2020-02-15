import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserratedComponent } from './userrated.component';

describe('UserratedComponent', () => {
  let component: UserratedComponent;
  let fixture: ComponentFixture<UserratedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserratedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
