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
      this.deliveriesDataEmiiter$.next(deliveryDatas);
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

  getCountDeliveryByDeliverAndNeibourhood() {
    const motoristaData = this.deliveryDatas.reduce((acc, delivery) => {
      const nomeMotorista = delivery.motorista.nome;
      const bairro = delivery.cliente_destino.bairro;
      const status = delivery.status_entrega;

      if (!acc[nomeMotorista]) {
        acc[nomeMotorista] = {
          motorista: { nome: nomeMotorista },
          totalEntregas: 0,
          entregasRealizadas: 0,
          entregasSemSucesso: 0,
        };
      }

      if (!acc[bairro]) {
        acc[bairro] = {
          bairro: { nome: bairro },
          totalEntregas: 0,
          entregasRealizadas: 0,
          entregasSemSucesso: 0,
        };
      }

      acc[bairro].totalEntregas++;
      acc[nomeMotorista].totalEntregas++;

      if (status === 'ENTREGUE') {
        acc[bairro].entregasRealizadas++;
        acc[nomeMotorista].entregasRealizadas++;
      }

      if (status === 'INSUCESSO') {
        acc[nomeMotorista].entregasSemSucesso++;
      }

      return acc;
    }, {} as Record<string, GettAllDeliveriesByDeliver>);

    return (this.motoristas = Object.values(motoristaData));
  }
}
