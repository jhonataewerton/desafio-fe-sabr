import { GetAllDeliveriesResponse } from 'src/app/models/GetAllDeliveriesResponse';
import { DeliveriesDataTransferServiceService } from './../../../../shared/services/deliveries-data-transfer-service.service';
import { Component, OnInit } from '@angular/core';
import { DeliveryService } from 'src/app/services/delivery/delivery.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  private readonly destroy$: Subject<void> = new Subject();
  public customerDatas: Array<GetAllDeliveriesResponse> = [];

  constructor(
    private deliveriesDataTransferServiceService: DeliveriesDataTransferServiceService,
    private deliveryService: DeliveryService
  ) {}

  contentData!: GetAllDeliveriesResponse[];
  contentDataByDeliver!: any[];
  contentDataByNeighbourhood!: any[];
  columnsTableDeliveryByDeliver: string[] = [
    'motorista',
    'qtdTotal',
    'qtdEntregue',
  ];

  columnsTableUnsuccessfully: string[] = ['motorista', 'qtdFalha'];

  columnsTableDeliveryByNeighbourhood: string[] = [
    'bairro',
    'qtdTotal',
    'qtdEntregue',
  ];

  ngOnInit(): void {
    this.loadData();
    this.getAPIDeliveryDatas();
  }

  loadData() {
    this.deliveriesDataTransferServiceService.getDeliveryDatas();

    this.contentDataByDeliver = this.deliveriesDataTransferServiceService
      .getCountDeliveryByDeliverAndNeibourhood()
      .filter((res) => 'motorista' in res);

    this.contentDataByNeighbourhood = this.deliveriesDataTransferServiceService
      .getCountDeliveryByDeliverAndNeibourhood()
      .filter((res) => 'bairro' in res);
  }

  getAPIDeliveryDatas() {
    if (
      this.deliveriesDataTransferServiceService.getDeliveryDatas().length <= 0
    ) {
      this.deliveryService
        .getAllDeliveries()
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response) => {
            this.deliveriesDataTransferServiceService.setDeliveryDatas(
              response
            );
            this.loadData();
          },
          error: (err) => {
            console.log(err);
          },
        });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
