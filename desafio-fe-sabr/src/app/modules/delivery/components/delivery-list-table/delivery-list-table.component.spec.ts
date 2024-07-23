import { MatTableModule } from '@angular/material/table';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryListTableComponent } from './delivery-list-table.component';
import {
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';

describe('DeliveryListTableComponent', () => {
  let component: DeliveryListTableComponent;
  let fixture: ComponentFixture<DeliveryListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeliveryListTableComponent],
      imports: [
        BrowserAnimationsModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        BrowserModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DeliveryListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
