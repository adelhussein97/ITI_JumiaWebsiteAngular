import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ishipping } from '../Model/ishipping';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {
  httpHeader={};

  constructor(private httpClient:HttpClient) {
    this.httpHeader ={
      headers: new HttpHeaders({
        'content-type':'application/json',
      }),
    };
  }

  addNewShipping(ship:Ishipping):Observable<Ishipping>{
    return this.httpClient.post<Ishipping>(`${environment.APIUrl}/Shippings`,JSON.stringify(ship),this.httpHeader)
  }
}
