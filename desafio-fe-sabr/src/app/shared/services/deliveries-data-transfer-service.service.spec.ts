import { TestBed } from '@angular/core/testing';

import { DeliveriesDataTransferServiceService } from './deliveries-data-transfer-service.service';
import { BehaviorSubject } from 'rxjs';
import { GetAllDeliveriesResponse } from 'src/app/models/GetAllDeliveriesResponse';
import { GettAllDeliveriesByDeliver } from 'src/app/models/GettAllDeliveriesByDeliver';

describe('DeliveriesDataTransferServiceService', () => {
  let service: DeliveriesDataTransferServiceService;
  let mockDeliveriesDataEmitter$: BehaviorSubject<
    Array<GetAllDeliveriesResponse>
  >;

  beforeEach(() => {
    mockDeliveriesDataEmitter$ = new BehaviorSubject<
      Array<GetAllDeliveriesResponse>
    >([]);

    TestBed.configureTestingModule({
      providers: [
        DeliveriesDataTransferServiceService,
        {
          provide: 'deliveriesDataEmitter$',
          useValue: mockDeliveriesDataEmitter$,
        },
      ],
    });
    service = TestBed.inject(DeliveriesDataTransferServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call next with the correct data when setDeliveryDatas is called', () => {
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
    ];

    mockDeliveriesDataEmitter$.next(mockData);
    service.setDeliveryDatas(mockData);
    const result = service.getDeliveryDatas();

    expect(result).toEqual(mockData);
  });

  it('should call next with the correct data when getDeliveryDatas is called', () => {
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
    ];

    mockDeliveriesDataEmitter$.next(mockData);
    service.setDeliveryDatas(mockData);
    const result = service.getDeliveryDatas();

    expect(result).toEqual(mockData);
  });

  it('should count deliveries correctly by deliver and neighborhood', () => {
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

    mockDeliveriesDataEmitter$.next(mockData);
    service.setDeliveryDatas(mockData);
    const resultDelivery = service.getDeliveryDatas();

    const resultDeliveryByDeliverAndNeigourhood =
      service.getCountDeliveryByDeliverAndNeibourhood();

    const expectedData: Array<GettAllDeliveriesByDeliver> = [
      {
        motorista: { nome: 'Carlos Pereira' },
        totalEntregas: 2,
        entregasRealizadas: 1,
        entregasSemSucesso: 1,
      },
      {
        bairro: { nome: 'Liberdade' },
        totalEntregas: 1,
        entregasRealizadas: 1,
        entregasSemSucesso: 0,
      },
      {
        bairro: { nome: 'Consolação' },
        totalEntregas: 1,
        entregasRealizadas: 0,
        entregasSemSucesso: 0,
      },
    ];

    expect(resultDeliveryByDeliverAndNeigourhood).toEqual(
      jasmine.arrayContaining(expectedData)
    );
  });
});
