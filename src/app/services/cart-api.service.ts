import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Icart } from '../Model/icart';
import { IcartItems } from '../Model/icart-items';
import { Itrackorder } from '../Model/itrackorder';

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
    return this.httpclient.get<number>(`${environment.APIUrl}/Carts/GetLastId`);
  }
  AddNewOrder(cart: Icart): Observable<Icart> {
    return this.httpclient.post<Icart>(
      `${environment.APIUrl}/Carts/AddCart`,
      JSON.stringify(cart),
      this.httpHeader
    );
  }

GetCartsByUserId(userId: string): Observable<Itrackorder[]> {
    return this.httpclient.get<Itrackorder[]>(
      `${environment.APIUrl}/Carts/GetcartsByUserId/${userId}`
    );
  }

  AddOrderDetails(cartitems: IcartItems): Observable<IcartItems> {
    //debugger
    return this.httpclient.post<IcartItems>(
      `${environment.APIUrl}/CartItems/AddCartItem`,
      JSON.stringify(cartitems),
      this.httpHeader
    );
  }
}
