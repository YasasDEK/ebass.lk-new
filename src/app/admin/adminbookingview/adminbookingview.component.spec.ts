import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbookingviewComponent } from './adminbookingview.component';

describe('AdminbookingviewComponent', () => {
  let component: AdminbookingviewComponent;
  let fixture: ComponentFixture<AdminbookingviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbookingviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbookingviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
