import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressbookComponent } from './addressbook.component';

describe('AddressbookComponent', () => {
  let component: AddressbookComponent;
  let fixture: ComponentFixture<AddressbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
