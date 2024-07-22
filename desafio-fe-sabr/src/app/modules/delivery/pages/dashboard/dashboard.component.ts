import { GetAllDeliveriesResponse } from 'src/app/models/GetAllDeliveriesResponse';
import { DeliveriesDataTransferServiceService } from './../../../../shared/services/deliveries-data-transfer-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private deliveriesDataTransferServiceService: DeliveriesDataTransferServiceService
  ) {}

  contentData!: GetAllDeliveriesResponse[];
  contentDataByDeliver!: any[]
  columnsTableDeliveryByDeliver: string[] = ['motorista', 'qtdTotal', 'qtdEntregue']

  ngOnInit(): void {
    this.contentData = this.deliveriesDataTransferServiceService.getDeliveryDatas();
    console.log(this.deliveriesDataTransferServiceService.getCountDeliveryByDeliver())
    this.contentDataByDeliver = this.deliveriesDataTransferServiceService.getCountDeliveryByDeliver()
  }

}
