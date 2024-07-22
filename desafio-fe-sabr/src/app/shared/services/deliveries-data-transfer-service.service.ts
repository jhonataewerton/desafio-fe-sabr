import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GetAllDeliveriesResponse } from 'src/app/models/GetAllDeliveriesResponse';
import { GettAllDeliveriesByDeliver } from 'src/app/models/GettAllDeliveriesByDeliver';

@Injectable({
  providedIn: 'root',
})
export class DeliveriesDataTransferServiceService {
  public deliveriesDataEmiiter$ =
    new BehaviorSubject<Array<GetAllDeliveriesResponse> | null>(null);
  public deliveryDatas: Array<GetAllDeliveriesResponse> = [];

  motoristas: GettAllDeliveriesByDeliver[] = [];

  setDeliveryDatas(deliveryDatas: Array<GetAllDeliveriesResponse>): void {
    if (deliveryDatas) {
      this.deliveriesDataEmiiter$.next(deliveryDatas);
    }
  }

  getDeliveryDatas() {
    this.deliveriesDataEmiiter$.subscribe({
      next: (response) => {
        if (response) {
          this.deliveryDatas = response;
        }
      },
    });
    return this.deliveryDatas;
  }

  getCountDeliveryByDeliver() {
    const motoristaData = this.deliveryDatas.reduce((acc, delivery) => {
      const nomeMotorista = delivery.motorista.nome;
      const status = delivery.status_entrega;

      if (!acc[nomeMotorista]) {
        acc[nomeMotorista] = {
          motorista: { nome: nomeMotorista },
          totalEntregas: 0,
          entregasRealizadas: 0,
        };
      }

      acc[nomeMotorista].totalEntregas++;

      if (status === 'ENTREGUE' || status === 'pendente') {
        acc[nomeMotorista].entregasRealizadas++;
      }

      return acc;
    }, {} as Record<string, GettAllDeliveriesByDeliver>);

    return (this.motoristas = Object.values(motoristaData));
  }
}
