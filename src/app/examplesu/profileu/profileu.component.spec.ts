import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileuComponent } from './profileu.component';

describe('ProfileComponent', () => {
  let component: ProfileuComponent;
  let fixture: ComponentFixture<ProfileuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
