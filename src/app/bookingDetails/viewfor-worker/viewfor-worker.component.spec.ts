import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewforWorkerComponent } from './viewfor-worker.component';

describe('ViewforWorkerComponent', () => {
  let component: ViewforWorkerComponent;
  let fixture: ComponentFixture<ViewforWorkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewforWorkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewforWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
