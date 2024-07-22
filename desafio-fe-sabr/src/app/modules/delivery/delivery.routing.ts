import { Routes } from '@angular/router';
import { ListDeliveryComponent } from './pages/list-delivery/list-delivery.component';
import { DeliveryListTableComponent } from './components/delivery-list-table/delivery-list-table.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const DELIVERY_ROUTES: Routes = [
  {
    path: '',
    component: ListDeliveryComponent,
  },

  {
    path: 'list-delivery',
    component: ListDeliveryComponent,
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
  },

];
