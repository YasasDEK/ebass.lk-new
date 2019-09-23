import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectriciansComponent } from './electricians.component';

describe('ElectriciansComponent', () => {
  let component: ElectriciansComponent;
  let fixture: ComponentFixture<ElectriciansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectriciansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectriciansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
