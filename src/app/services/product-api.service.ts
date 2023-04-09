import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Iproduct } from '../Model/iproduct';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<Iproduct[]> {
    // return this.httpClient.get<Iproduct[]>('http://localhost:3000/products')
    return this.httpClient.get<Iproduct[]>(`${environment.APIUrl}/Products/GetAllProducts`);
  }

  getProductsByCatId(catid: number): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(
      `${environment.APIUrl}/Products/GetAllProducts?categoryId=${catid}`
    );
  }



}
