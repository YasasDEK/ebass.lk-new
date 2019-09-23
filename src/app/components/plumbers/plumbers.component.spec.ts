import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlumbersComponent } from './plumbers.component';

describe('PlumbersComponent', () => {
  let component: PlumbersComponent;
  let fixture: ComponentFixture<PlumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
