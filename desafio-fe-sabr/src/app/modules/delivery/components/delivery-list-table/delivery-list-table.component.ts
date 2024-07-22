import { SelectionModel } from '@angular/cdk/collections';
import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GetAllDeliveriesResponse } from 'src/app/models/GetAllDeliveriesResponse';




@Component({
  selector: 'app-delivery-list-table',
  templateUrl: './delivery-list-table.component.html',
  styleUrls: ['./delivery-list-table.component.scss'],
})
export class DeliveryListTableComponent
  implements OnInit, OnChanges, AfterViewInit
{
   DATA = [
    {
      "id": "1",
      "documento": "01021",
      "motorista": {
        "nome": "Carlos Pereira"
      },
      "cliente_origem": {
        "nome": "Empresa ABC",
        "endereco": "Rua dos Pinheiros, 789",
        "bairro": "Jardins",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Ana Clara",
        "endereco": "Rua Vergueiro, 1234",
        "bairro": "Liberdade",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "ENTREGUE"
    },
    {
      "id": "2",
      "documento": "01022",
      "motorista": {
        "nome": "Carla Souza"
      },
      "cliente_origem": {
        "nome": "Empresa DEF",
        "endereco": "Rua Augusta, 345",
        "bairro": "Consola\u00e7\u00e3o",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Pedro Lima",
        "endereco": "Avenida Brasil, 1010",
        "bairro": "Jardins",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "PENDENTE"
    },
    {
      "id": "3",
      "documento": "01023",
      "motorista": {
        "nome": "Maria Oliveira"
      },
      "cliente_origem": {
        "nome": "Empresa GHI",
        "endereco": "Avenida Ibirapuera, 890",
        "bairro": "Moema",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Jo\u00e3o Mendes",
        "endereco": "Rua Pamplona, 567",
        "bairro": "Jardim Paulista",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "PENDENTE"
    },
    {
      "id": "4",
      "documento": "01024",
      "motorista": {
        "nome": "Jo\u00e3o Silva"
      },
      "cliente_origem": {
        "nome": "Empresa XYZ",
        "endereco": "Rua das Flores, 123",
        "bairro": "Liberdade",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Paula Silva",
        "endereco": "Rua da Consola\u00e7\u00e3o, 123",
        "bairro": "Centro",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "ENTREGUE"
    },
    {
      "id": "5",
      "documento": "01025",
      "motorista": {
        "nome": "Carlos Pereira"
      },
      "cliente_origem": {
        "nome": "Empresa ABC",
        "endereco": "Rua dos Pinheiros, 789",
        "bairro": "Bela Vista",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Carlos Lima",
        "endereco": "Rua Paulista, 101",
        "bairro": "Moema",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "ENTREGUE"
    },
    {
      "id": "6",
      "documento": "01026",
      "motorista": {
        "nome": "Carla Souza"
      },
      "cliente_origem": {
        "nome": "Empresa DEF",
        "endereco": "Rua Augusta, 345",
        "bairro": "Jardim Paulista",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Ana Souza",
        "endereco": "Rua Vergueiro, 567",
        "bairro": "Consola\u00e7\u00e3o",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "PENDENTE"
    },
    {
      "id": "7",
      "documento": "01027",
      "motorista": {
        "nome": "Maria Oliveira"
      },
      "cliente_origem": {
        "nome": "Empresa GHI",
        "endereco": "Avenida Ibirapuera, 890",
        "bairro": "Centro",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Maria Souza",
        "endereco": "Avenida Paulista, 456",
        "bairro": "Bela Vista",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "ENTREGUE"
    },
    {
      "id": "8",
      "documento": "01028",
      "motorista": {
        "nome": "Jo\u00e3o Silva"
      },
      "cliente_origem": {
        "nome": "Empresa XYZ",
        "endereco": "Rua das Flores, 123",
        "bairro": "Jardins",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Ana Clara",
        "endereco": "Rua Vergueiro, 1234",
        "bairro": "Liberdade",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "PENDENTE"
    },
    {
      "id": "9",
      "documento": "01029",
      "motorista": {
        "nome": "Carlos Pereira"
      },
      "cliente_origem": {
        "nome": "Empresa ABC",
        "endereco": "Rua dos Pinheiros, 789",
        "bairro": "Consola\u00e7\u00e3o",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Pedro Lima",
        "endereco": "Avenida Brasil, 1010",
        "bairro": "Jardins",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "PENDENTE"
    },
    {
      "id": "10",
      "documento": "01030",
      "motorista": {
        "nome": "Carla Souza"
      },
      "cliente_origem": {
        "nome": "Empresa DEF",
        "endereco": "Rua Augusta, 345",
        "bairro": "Moema",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Jo\u00e3o Mendes",
        "endereco": "Rua Pamplona, 567",
        "bairro": "Jardim Paulista",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "ENTREGUE"
    },
    {
      "id": "11",
      "documento": "01031",
      "motorista": {
        "nome": "Maria Oliveira"
      },
      "cliente_origem": {
        "nome": "Empresa GHI",
        "endereco": "Avenida Ibirapuera, 890",
        "bairro": "Liberdade",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Paula Silva",
        "endereco": "Rua da Consola\u00e7\u00e3o, 123",
        "bairro": "Centro",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "PENDENTE"
    },
    {
      "id": "12",
      "documento": "01032",
      "motorista": {
        "nome": "Jo\u00e3o Silva"
      },
      "cliente_origem": {
        "nome": "Empresa XYZ",
        "endereco": "Rua das Flores, 123",
        "bairro": "Bela Vista",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Carlos Lima",
        "endereco": "Rua Paulista, 101",
        "bairro": "Moema",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "PENDENTE"
    },
    {
      "id": "13",
      "documento": "01033",
      "motorista": {
        "nome": "Carlos Pereira"
      },
      "cliente_origem": {
        "nome": "Empresa ABC",
        "endereco": "Rua dos Pinheiros, 789",
        "bairro": "Jardim Paulista",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Ana Souza",
        "endereco": "Rua Vergueiro, 567",
        "bairro": "Consola\u00e7\u00e3o",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "ENTREGUE"
    },
    {
      "id": "14",
      "documento": "01034",
      "motorista": {
        "nome": "Carla Souza"
      },
      "cliente_origem": {
        "nome": "Empresa DEF",
        "endereco": "Rua Augusta, 345",
        "bairro": "Centro",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Maria Souza",
        "endereco": "Avenida Paulista, 456",
        "bairro": "Bela Vista",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "INSUCESSO"
    },
    {
      "id": "15",
      "documento": "01035",
      "motorista": {
        "nome": "Maria Oliveira"
      },
      "cliente_origem": {
        "nome": "Empresa GHI",
        "endereco": "Avenida Ibirapuera, 890",
        "bairro": "Jardins",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Ana Clara",
        "endereco": "Rua Vergueiro, 1234",
        "bairro": "Liberdade",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "PENDENTE"
    },
    {
      "id": "16",
      "documento": "01036",
      "motorista": {
        "nome": "Jo\u00e3o Silva"
      },
      "cliente_origem": {
        "nome": "Empresa XYZ",
        "endereco": "Rua das Flores, 123",
        "bairro": "Consola\u00e7\u00e3o",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Pedro Lima",
        "endereco": "Avenida Brasil, 1010",
        "bairro": "Jardins",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "ENTREGUE"
    },
    {
      "id": "17",
      "documento": "01037",
      "motorista": {
        "nome": "Carlos Pereira"
      },
      "cliente_origem": {
        "nome": "Empresa ABC",
        "endereco": "Rua dos Pinheiros, 789",
        "bairro": "Moema",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Jo\u00e3o Mendes",
        "endereco": "Rua Pamplona, 567",
        "bairro": "Jardim Paulista",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "PENDENTE"
    },
    {
      "id": "18",
      "documento": "01038",
      "motorista": {
        "nome": "Carla Souza"
      },
      "cliente_origem": {
        "nome": "Empresa DEF",
        "endereco": "Rua Augusta, 345",
        "bairro": "Liberdade",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Paula Silva",
        "endereco": "Rua da Consola\u00e7\u00e3o, 123",
        "bairro": "Centro",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "PENDENTE"
    },
    {
      "id": "19",
      "documento": "01039",
      "motorista": {
        "nome": "Maria Oliveira"
      },
      "cliente_origem": {
        "nome": "Empresa GHI",
        "endereco": "Avenida Ibirapuera, 890",
        "bairro": "Bela Vista",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Carlos Lima",
        "endereco": "Rua Paulista, 101",
        "bairro": "Moema",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "ENTREGUE"
    },
    {
      "id": "20",
      "documento": "01040",
      "motorista": {
        "nome": "Jo\u00e3o Silva"
      },
      "cliente_origem": {
        "nome": "Empresa XYZ",
        "endereco": "Rua das Flores, 123",
        "bairro": "Jardim Paulista",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Ana Souza",
        "endereco": "Rua Vergueiro, 567",
        "bairro": "Consola\u00e7\u00e3o",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "ENTREGUE"
    },
    {
      "id": "21",
      "documento": "01041",
      "motorista": {
        "nome": "Carlos Pereira"
      },
      "cliente_origem": {
        "nome": "Empresa ABC",
        "endereco": "Rua dos Pinheiros, 789",
        "bairro": "Centro",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Maria Souza",
        "endereco": "Avenida Paulista, 456",
        "bairro": "Bela Vista",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "PENDENTE"
    },
    {
      "id": "22",
      "documento": "01042",
      "motorista": {
        "nome": "Carla Souza"
      },
      "cliente_origem": {
        "nome": "Empresa DEF",
        "endereco": "Rua Augusta, 345",
        "bairro": "Jardins",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Ana Clara",
        "endereco": "Rua Vergueiro, 1234",
        "bairro": "Liberdade",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "ENTREGUE"
    },
    {
      "id": "23",
      "documento": "01043",
      "motorista": {
        "nome": "Maria Oliveira"
      },
      "cliente_origem": {
        "nome": "Empresa GHI",
        "endereco": "Avenida Ibirapuera, 890",
        "bairro": "Consola\u00e7\u00e3o",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Pedro Lima",
        "endereco": "Avenida Brasil, 1010",
        "bairro": "Jardins",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "INSUCESSO"
    },
    {
      "id": "24",
      "documento": "01044",
      "motorista": {
        "nome": "Jo\u00e3o Silva"
      },
      "cliente_origem": {
        "nome": "Empresa XYZ",
        "endereco": "Rua das Flores, 123",
        "bairro": "Moema",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Jo\u00e3o Mendes",
        "endereco": "Rua Pamplona, 567",
        "bairro": "Jardim Paulista",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "PENDENTE"
    },
    {
      "id": "25",
      "documento": "01045",
      "motorista": {
        "nome": "Carlos Pereira"
      },
      "cliente_origem": {
        "nome": "Empresa ABC",
        "endereco": "Rua dos Pinheiros, 789",
        "bairro": "Liberdade",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Paula Silva",
        "endereco": "Rua da Consola\u00e7\u00e3o, 123",
        "bairro": "Centro",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "ENTREGUE"
    },
    {
      "id": "26",
      "documento": "01046",
      "motorista": {
        "nome": "Carla Souza"
      },
      "cliente_origem": {
        "nome": "Empresa DEF",
        "endereco": "Rua Augusta, 345",
        "bairro": "Bela Vista",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Carlos Lima",
        "endereco": "Rua Paulista, 101",
        "bairro": "Moema",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "INSUCESSO"
    },
    {
      "id": "27",
      "documento": "01047",
      "motorista": {
        "nome": "Maria Oliveira"
      },
      "cliente_origem": {
        "nome": "Empresa GHI",
        "endereco": "Avenida Ibirapuera, 890",
        "bairro": "Jardim Paulista",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Ana Souza",
        "endereco": "Rua Vergueiro, 567",
        "bairro": "Consola\u00e7\u00e3o",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "PENDENTE"
    },
    {
      "id": "28",
      "documento": "01048",
      "motorista": {
        "nome": "Jo\u00e3o Silva"
      },
      "cliente_origem": {
        "nome": "Empresa XYZ",
        "endereco": "Rua das Flores, 123",
        "bairro": "Centro",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Maria Souza",
        "endereco": "Avenida Paulista, 456",
        "bairro": "Bela Vista",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "ENTREGUE"
    },
    {
      "id": "29",
      "documento": "01049",
      "motorista": {
        "nome": "Carlos Pereira"
      },
      "cliente_origem": {
        "nome": "Empresa ABC",
        "endereco": "Rua dos Pinheiros, 789",
        "bairro": "Jardins",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Ana Clara",
        "endereco": "Rua Vergueiro, 1234",
        "bairro": "Liberdade",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "INSUCESSO"
    },
    {
      "id": "30",
      "documento": "01050",
      "motorista": {
        "nome": "Carla Souza"
      },
      "cliente_origem": {
        "nome": "Empresa DEF",
        "endereco": "Rua Augusta, 345",
        "bairro": "Consola\u00e7\u00e3o",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Pedro Lima",
        "endereco": "Avenida Brasil, 1010",
        "bairro": "Jardins",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "PENDENTE"
    },
    {
      "id": "31",
      "documento": "01051",
      "motorista": {
        "nome": "Maria Oliveira"
      },
      "cliente_origem": {
        "nome": "Empresa GHI",
        "endereco": "Avenida Ibirapuera, 890",
        "bairro": "Moema",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Jo\u00e3o Mendes",
        "endereco": "Rua Pamplona, 567",
        "bairro": "Jardim Paulista",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "ENTREGUE"
    },
    {
      "id": "32",
      "documento": "01052",
      "motorista": {
        "nome": "Jo\u00e3o Silva"
      },
      "cliente_origem": {
        "nome": "Empresa XYZ",
        "endereco": "Rua das Flores, 123",
        "bairro": "Liberdade",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Paula Silva",
        "endereco": "Rua da Consola\u00e7\u00e3o, 123",
        "bairro": "Centro",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "INSUCESSO"
    },
    {
      "id": "33",
      "documento": "01053",
      "motorista": {
        "nome": "Carlos Pereira"
      },
      "cliente_origem": {
        "nome": "Empresa ABC",
        "endereco": "Rua dos Pinheiros, 789",
        "bairro": "Bela Vista",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Carlos Lima",
        "endereco": "Rua Paulista, 101",
        "bairro": "Moema",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "PENDENTE"
    },
    {
      "id": "34",
      "documento": "01054",
      "motorista": {
        "nome": "Carla Souza"
      },
      "cliente_origem": {
        "nome": "Empresa DEF",
        "endereco": "Rua Augusta, 345",
        "bairro": "Jardim Paulista",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Ana Souza",
        "endereco": "Rua Vergueiro, 567",
        "bairro": "Consola\u00e7\u00e3o",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "ENTREGUE"
    },
    {
      "id": "35",
      "documento": "01055",
      "motorista": {
        "nome": "Maria Oliveira"
      },
      "cliente_origem": {
        "nome": "Empresa GHI",
        "endereco": "Avenida Ibirapuera, 890",
        "bairro": "Centro",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Maria Souza",
        "endereco": "Avenida Paulista, 456",
        "bairro": "Bela Vista",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "INSUCESSO"
    },
    {
      "id": "36",
      "documento": "01056",
      "motorista": {
        "nome": "Jo\u00e3o Silva"
      },
      "cliente_origem": {
        "nome": "Empresa XYZ",
        "endereco": "Rua das Flores, 123",
        "bairro": "Jardins",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Ana Clara",
        "endereco": "Rua Vergueiro, 1234",
        "bairro": "Liberdade",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "PENDENTE"
    },
    {
      "id": "37",
      "documento": "01057",
      "motorista": {
        "nome": "Carlos Pereira"
      },
      "cliente_origem": {
        "nome": "Empresa ABC",
        "endereco": "Rua dos Pinheiros, 789",
        "bairro": "Consola\u00e7\u00e3o",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Pedro Lima",
        "endereco": "Avenida Brasil, 1010",
        "bairro": "Jardins",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "ENTREGUE"
    },
    {
      "id": "38",
      "documento": "01058",
      "motorista": {
        "nome": "Carla Souza"
      },
      "cliente_origem": {
        "nome": "Empresa DEF",
        "endereco": "Rua Augusta, 345",
        "bairro": "Moema",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Jo\u00e3o Mendes",
        "endereco": "Rua Pamplona, 567",
        "bairro": "Jardim Paulista",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "INSUCESSO"
    },
    {
      "id": "39",
      "documento": "01059",
      "motorista": {
        "nome": "Maria Oliveira"
      },
      "cliente_origem": {
        "nome": "Empresa GHI",
        "endereco": "Avenida Ibirapuera, 890",
        "bairro": "Liberdade",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Paula Silva",
        "endereco": "Rua da Consola\u00e7\u00e3o, 123",
        "bairro": "Centro",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "PENDENTE"
    },
    {
      "id": "40",
      "documento": "01060",
      "motorista": {
        "nome": "Jo\u00e3o Silva"
      },
      "cliente_origem": {
        "nome": "Empresa XYZ",
        "endereco": "Rua das Flores, 123",
        "bairro": "Bela Vista",
        "cidade": "S\u00e3o Paulo"
      },
      "cliente_destino": {
        "nome": "Carlos Lima",
        "endereco": "Rua Paulista, 101",
        "bairro": "Moema",
        "cidade": "S\u00e3o Paulo"
      },
      "status_entrega": "ENTREGUE"
    }
  ]


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Input() contentTableData!: GetAllDeliveriesResponse[];

  dataSource = new MatTableDataSource<GetAllDeliveriesResponse>(this.DATA);

  displayedColumns: string[] = [
    'id',
    'documento',
    'motorista',
    'cliente_origem',
    'cliente_destino',
    'status_entrega',
  ];

  selection = new SelectionModel<GetAllDeliveriesResponse>(true, []);

  ngOnInit(): void {
    this.dataSource.filterPredicate = (data: GetAllDeliveriesResponse, filter: string) => {
      const transformedFilter = filter.trim().toLowerCase();
      const motoristaNome = data.motorista.nome.toLowerCase();
      const clienteOrigemNome = data.cliente_origem.nome.toLowerCase();
      const clienteDestinoNome = data.cliente_destino.nome.toLowerCase();

      return motoristaNome.includes(transformedFilter) ||
             clienteOrigemNome.includes(transformedFilter) ||
             clienteDestinoNome.includes(transformedFilter) ||
             data.documento.toLowerCase().includes(transformedFilter) ||
             data.status_entrega.toLowerCase().includes(transformedFilter);
    };

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['contentTableData']) {
      this.dataSource.data = this.contentTableData;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
