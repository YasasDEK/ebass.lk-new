import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyWorkersComponent } from './verify-workers.component';

describe('VerifyWorkersComponent', () => {
  let component: VerifyWorkersComponent;
  let fixture: ComponentFixture<VerifyWorkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyWorkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
