import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminimageComponent } from './adminimage.component';

describe('AdminimageComponent', () => {
  let component: AdminimageComponent;
  let fixture: ComponentFixture<AdminimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
