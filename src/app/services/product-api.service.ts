import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Iproduct } from '../Model/iproduct';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iproductimage } from '../Model/iproductimage';
import { Icategory } from '../Model/icategory';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(
      `${environment.APIUrl}/Products/GetAllProducts`
    );
  }

  getAllCategories(): Observable<Icategory[]> {
    return this.httpClient.get<Icategory[]>(
      `${environment.APIUrl}/Categories/Getcategories`
    );
  }

  getProductsByCatId(catid: number): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(
      `${environment.APIUrl}/Products/GetAllProducts?categoryId=${catid}`
    );
  }
  getProductsById(pid: number): Observable<Iproduct> {
    return this.httpClient.get<Iproduct>(
      `${environment.APIUrl}/Products/GetProduct/${pid}`
    );
  }

  getAllProductsImages(id: any): Observable<Iproductimage[]> {
    return this.httpClient.get<Iproductimage[]>(
      `${environment.APIUrl}/Products/GetProductImages/${id}`
    );
  }

  // getProductsByCategory(categoryId: number) {
  //   return this.httpClient.get(`${environment.APIUrl}/Categories/GetProductsByCategoryId/{{categoryId}}`);
  // }
}
