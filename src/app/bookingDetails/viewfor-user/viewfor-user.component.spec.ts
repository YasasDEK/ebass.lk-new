import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewforUserComponent } from './viewfor-user.component';

describe('ViewforUserComponent', () => {
  let component: ViewforUserComponent;
  let fixture: ComponentFixture<ViewforUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewforUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewforUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
