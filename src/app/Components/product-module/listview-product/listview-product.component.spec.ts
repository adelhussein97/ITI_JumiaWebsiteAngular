import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListviewProductComponent } from './listview-product.component';

describe('ListviewProductComponent', () => {
  let component: ListviewProductComponent;
  let fixture: ComponentFixture<ListviewProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListviewProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListviewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
