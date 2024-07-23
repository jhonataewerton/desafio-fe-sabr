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
import { GetAllDeliveriesResponse } from 'src/app/models/GetAllDeliveriesResponse';

describe('DeliveryListTableComponent', () => {
  let component: DeliveryListTableComponent;
  let fixture: ComponentFixture<DeliveryListTableComponent>;

  const mockData: GetAllDeliveriesResponse[] = [
    {
      id: '1',
      documento: '12345',
      motorista: { nome: 'João Silva' },
      cliente_origem: { nome: 'Empresa A', endereco: '', bairro: '', cidade: '' },
      cliente_destino: { nome: 'Cliente A', endereco: '', bairro: '', cidade: '' },
      status_entrega: 'ENTREGUE',
    },
    {
      id: '2',
      documento: '67890',
      motorista: { nome: 'Maria Oliveira' },
      cliente_origem: { nome: 'Empresa B', endereco: '', bairro: '', cidade: '' },
      cliente_destino: { nome: 'Cliente B', endereco: '', bairro: '', cidade: '' },
      status_entrega: 'PENDENTE',
    },
  ];


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
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryListTableComponent);
    component = fixture.componentInstance;
    component.contentTableData = mockData;
    component.columns = ['documento', 'motorista', 'cliente_origem', 'cliente_destino', 'status_entrega'];
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter data based on motorista name', () => {
    component.configFilter();
    component.dataSource.data = mockData
    component.dataSource.filter = 'João Silva'.trim().toLowerCase();
    expect(component.dataSource.filteredData.length).toBe(1);
    expect(component.dataSource.filteredData[0].motorista.nome).toBe('João Silva');
  });

  it('should apply filter correctly', () => {
    const filterValue = 'test';
    const event = {
      target: {
        value: filterValue
      }
    } as unknown as Event;

    component.applyFilter(event);

    expect(component.dataSource.filter).toBe(filterValue.trim().toLowerCase());
  });

  it('should return the correct classes for delivery status', () => {
    // Test for 'PENDENTE'
    let result = component.setClassDelivery('PENDENTE');
    expect(result).toEqual({
      waiting: true,
      success: false,
      fail: false,
    });

    // Test for 'ENTREGUE'
    result = component.setClassDelivery('ENTREGUE');
    expect(result).toEqual({
      waiting: false,
      success: true,
      fail: false,
    });

    // Test for 'INSUCESSO'
    result = component.setClassDelivery('INSUCESSO');
    expect(result).toEqual({
      waiting: false,
      success: false,
      fail: true,
    });

    // Test for an unknown status
    result = component.setClassDelivery('UNKNOWN');
    expect(result).toEqual({
      waiting: false,
      success: false,
      fail: false,
    });
  });


});
