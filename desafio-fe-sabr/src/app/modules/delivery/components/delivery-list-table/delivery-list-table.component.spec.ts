import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryListTableComponent } from './delivery-list-table.component';

describe('DeliveryListTableComponent', () => {
  let component: DeliveryListTableComponent;
  let fixture: ComponentFixture<DeliveryListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryListTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
