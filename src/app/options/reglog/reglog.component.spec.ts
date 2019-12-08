import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglogComponent } from './reglog.component';

describe('ReglogComponent', () => {
  let component: ReglogComponent;
  let fixture: ComponentFixture<ReglogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReglogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
