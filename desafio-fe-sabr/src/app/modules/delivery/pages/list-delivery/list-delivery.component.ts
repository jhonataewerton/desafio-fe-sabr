import { DeliveriesDataTransferServiceService } from './../../../../shared/services/deliveries-data-transfer-service.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { GetAllDeliveriesResponse } from 'src/app/models/GetAllDeliveriesResponse';
import { DeliveryService } from 'src/app/services/delivery/delivery.service';

@Component({
  selector: 'app-list-delivery',
  templateUrl: './list-delivery.component.html',
  styleUrls: ['./list-delivery.component.scss'],
})
export class ListDeliveryComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();
  public customerDatas: Array<GetAllDeliveriesResponse> = [];
  columns: string[] = [
    'id',
    'documento',
    'motorista',
    'cliente_origem',
    'cliente_destino',
    'status_entrega',
  ];

  constructor(
    private deliveryService: DeliveryService,
    private deliveriesDataTransferServiceService: DeliveriesDataTransferServiceService
  ) {}

  ngOnInit(): void {
    if (this.deliveriesDataTransferServiceService.getDeliveryDatas().length == 0) {
      this.getAPIDeliveryDatas();
    } else {
      this.customerDatas =
        this.deliveriesDataTransferServiceService.getDeliveryDatas();
    }
  }

  getAPIDeliveryDatas() {
    this.deliveryService
      .getAllDeliveries()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.deliveriesDataTransferServiceService.setDeliveryDatas(response);
          this.customerDatas = response;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
