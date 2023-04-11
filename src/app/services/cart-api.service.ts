import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Icart } from '../Model/icart';
import { IcartItems } from '../Model/icart-items';

@Injectable({
  providedIn: 'root',
})
export class CartApiService {
  httpHeader = {};
  constructor(private httpclient: HttpClient) {
    this.httpHeader = {
      headers: new HttpHeaders({
        'content-type': 'Application/json',
      }),
    };
  }

  GetLastCartId(): Observable<number> {
    return this.httpclient.get<number>(
      `${environment.APIUrl}/Cart/GetLastCardId`
    );
  }
  AddNewOrder(cart: Icart): Observable<Icart> {
    return this.httpclient.post<Icart>(
      `${environment.APIUrl}/Cart/AddCart`,
      JSON.stringify(cart),
      this.httpHeader
    );
  }
  AddOrderDetails(cartitems: IcartItems): Observable<IcartItems> {
    return this.httpclient.post<IcartItems>(
      `${environment.APIUrl}/CartItems/AddCartItem`,
      JSON.stringify(cartitems),
      this.httpHeader
    );
  }
}
