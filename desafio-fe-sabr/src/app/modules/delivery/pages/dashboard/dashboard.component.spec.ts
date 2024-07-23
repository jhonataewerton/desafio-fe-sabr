import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { DeliveryListTableComponent } from '../../components/delivery-list-table/delivery-list-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DeliveriesDataTransferServiceService } from 'src/app/shared/services/deliveries-data-transfer-service.service';
import { DeliveryService } from 'src/app/services/delivery/delivery.service';
import { of, throwError } from 'rxjs';
import { GetAllDeliveriesResponse } from 'src/app/models/GetAllDeliveriesResponse';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let mockDeliveriesDataTransferService: jasmine.SpyObj<DeliveriesDataTransferServiceService>;
  let mockDeliveryService: jasmine.SpyObj<DeliveryService>;

  beforeEach(async () => {
    const deliveriesDataTransferServiceSpy = jasmine.createSpyObj(
      'DeliveriesDataTransferServiceService',
      [
        'getDeliveryDatas',
        'getCountDeliveryByDeliverAndNeibourhood',
        'setDeliveryDatas',
      ]
    );

    const deliveryServiceSpy = jasmine.createSpyObj('DeliveryService', [
      'getAllDeliveries',
    ]);

    await TestBed.configureTestingModule({
      imports: [HttpClientModule, MatTableModule, MatPaginatorModule],
      declarations: [DashboardComponent, DeliveryListTableComponent],
      providers: [
        {
          provide: DeliveriesDataTransferServiceService,
          useValue: deliveriesDataTransferServiceSpy,
        },
        { provide: DeliveryService, useValue: deliveryServiceSpy },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;

    mockDeliveriesDataTransferService = TestBed.inject(
      DeliveriesDataTransferServiceService
    ) as jasmine.SpyObj<DeliveriesDataTransferServiceService>;
    mockDeliveryService = TestBed.inject(
      DeliveryService
    ) as jasmine.SpyObj<DeliveryService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
