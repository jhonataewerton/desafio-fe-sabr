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
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Input() contentTableData!: GetAllDeliveriesResponse[];
  @Input() columns!: string[];
  @Input() isMaintTable: boolean = true;

  dataSource = new MatTableDataSource<GetAllDeliveriesResponse>(
    this.contentTableData
  );

  displayedColumns!: string[];

  selection = new SelectionModel<GetAllDeliveriesResponse>(true, []);

  ngOnInit(): void {
    console.log(this.contentTableData, "DATA")
    console.log(this.columns, "COLUNS")
    this.displayedColumns = this.columns;
    this.dataSource.filterPredicate = (
      data: GetAllDeliveriesResponse,
      filter: string
    ) => {
      const transformedFilter = filter.trim().toLowerCase();
      const motoristaNome = data.motorista.nome.toLowerCase();
      const clienteOrigemNome = data.cliente_origem.nome.toLowerCase();
      const clienteDestinoNome = data.cliente_destino.nome.toLowerCase();

      return (
        motoristaNome.includes(transformedFilter) ||
        clienteOrigemNome.includes(transformedFilter) ||
        clienteDestinoNome.includes(transformedFilter) ||
        data.documento.toLowerCase().includes(transformedFilter) ||
        data.status_entrega.toLowerCase().includes(transformedFilter)
      );
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

  setClassDelivery(delivery: String) {
    return {
      waiting: delivery === 'PENDENTE',
      success: delivery === 'ENTREGUE',
      fail: delivery === 'INSUCESSO',
    };
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
