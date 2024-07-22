import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDeliveryComponent } from './pages/list-delivery/list-delivery.component';
import { DELIVERY_ROUTES } from './delivery.routing';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListDeliveryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(DELIVERY_ROUTES),
  ]
})
export class DeliveryModule { }
