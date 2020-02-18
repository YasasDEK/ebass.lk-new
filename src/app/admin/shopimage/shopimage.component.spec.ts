import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopimageComponent } from './shopimage.component';

describe('ShopimageComponent', () => {
  let component: ShopimageComponent;
  let fixture: ComponentFixture<ShopimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
