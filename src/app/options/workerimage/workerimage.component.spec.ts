import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerimageComponent } from './workerimage.component';

describe('WorkerimageComponent', () => {
  let component: WorkerimageComponent;
  let fixture: ComponentFixture<WorkerimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
