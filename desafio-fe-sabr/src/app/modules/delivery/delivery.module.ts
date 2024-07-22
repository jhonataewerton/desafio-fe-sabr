import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDeliveryComponent } from './pages/list-delivery/list-delivery.component';
import { DELIVERY_ROUTES } from './delivery.routing';
import { RouterModule } from '@angular/router';

import { DeliveryListTableComponent } from './components/delivery-list-table/delivery-list-table.component';

import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ListDeliveryComponent, DeliveryListTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(DELIVERY_ROUTES),
    ReactiveFormsModule,
    FormsModule,
    // Material
    MatTableModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    MatSortModule,
    FlexLayoutModule
  ],
})
export class DeliveryModule {}
