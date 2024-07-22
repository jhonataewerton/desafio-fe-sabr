import { Routes } from '@angular/router';
import { ListDeliveryComponent } from './pages/list-delivery/list-delivery.component';

export const DELIVERY_ROUTES: Routes = [
  {
    path: '',
    component: ListDeliveryComponent,
  },

  {
    path: 'list-delivery',
    component: ListDeliveryComponent,
  },
];
