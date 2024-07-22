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

  constructor(private deliveryService: DeliveryService) {}

  ngOnInit(): void {
    this.getAPIDeliveryDatas();
  }

  getAPIDeliveryDatas() {
    this.deliveryService
      .getAllDeliveries()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          console.log(response);
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
