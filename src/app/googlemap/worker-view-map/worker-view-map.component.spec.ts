import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerViewMapComponent } from './worker-view-map.component';

describe('WorkerViewMapComponent', () => {
  let component: WorkerViewMapComponent;
  let fixture: ComponentFixture<WorkerViewMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerViewMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerViewMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
