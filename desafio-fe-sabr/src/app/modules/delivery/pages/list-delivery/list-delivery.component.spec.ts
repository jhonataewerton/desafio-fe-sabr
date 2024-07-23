import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeliveryComponent } from './list-delivery.component';
import { HttpClientModule } from '@angular/common/http';
import { DeliveryListTableComponent } from '../../components/delivery-list-table/delivery-list-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';

describe('ListDeliveryComponent', () => {

  const deliveriesDataTransferServiceSpy = jasmine.createSpyObj('DeliveriesDataTransferServiceService', [
    'getDeliveryDatas',
    'setDeliveryDatas'
  ]);

  const deliveryServiceSpy = jasmine.createSpyObj('DeliveryService', ['getAllDeliveries']);


  let component: ListDeliveryComponent;
  let fixture: ComponentFixture<ListDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        BrowserModule
      ],
      declarations: [ListDeliveryComponent, DeliveryListTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
