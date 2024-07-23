import { TestBed } from '@angular/core/testing';

import { DeliveryService } from './delivery.service';
import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { GetAllDeliveriesResponse } from 'src/app/models/GetAllDeliveriesResponse';
import { environment } from 'src/app/environments/environment';

describe('DeliveryService', () => {
  let service: DeliveryService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [DeliveryService],
    });
    service = TestBed.inject(DeliveryService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all deliveries', () => {
    const mockData: Array<GetAllDeliveriesResponse> = [
      {
        id: '1',
        documento: '01021',
        motorista: { nome: 'Carlos Pereira' },
        cliente_origem: {
          nome: 'Empresa ABC',
          endereco: 'Rua dos Pinheiros, 789',
          bairro: 'Jardins',
          cidade: 'São Paulo',
        },
        cliente_destino: {
          nome: 'Ana Clara',
          endereco: 'Rua Vergueiro, 1234',
          bairro: 'Liberdade',
          cidade: 'São Paulo',
        },
        status_entrega: 'ENTREGUE',
      },
      {
        id: '2',
        documento: '01022',
        motorista: { nome: 'Carlos Pereira' },
        cliente_origem: {
          nome: 'Empresa DEF',
          endereco: 'Avenida Paulista, 1000',
          bairro: 'Bela Vista',
          cidade: 'São Paulo',
        },
        cliente_destino: {
          nome: 'João Silva',
          endereco: 'Rua Augusta, 1500',
          bairro: 'Consolação',
          cidade: 'São Paulo',
        },
        status_entrega: 'INSUCESSO',
      },
    ];

    service.getAllDeliveries().subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    const req = httpTestingController.expectOne(`${environment.API_URL}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });
});
