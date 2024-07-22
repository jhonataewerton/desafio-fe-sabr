import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environments/environment';
import { Observable } from 'rxjs';
import { GetAllDeliveriesResponse } from 'src/app/models/GetAllDeliveriesResponse';

@Injectable({
  providedIn: 'root',
})
export class DeliveryService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getAllDeliveries(): Observable<Array<GetAllDeliveriesResponse>> {
    return this.http.get<Array<GetAllDeliveriesResponse>>(`${this.API_URL}`);
  }
}
