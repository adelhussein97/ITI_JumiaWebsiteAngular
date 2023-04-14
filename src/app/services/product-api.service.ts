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
  getAllProductsImages(): Observable<Iproductimage[]> {
    return this.httpClient.get<Iproductimage[]>(
      `${environment.APIUrl}/Products/GetAllProductsImages`
    );
  }
  getAllProducts(): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(
      `${environment.APIUrl}/Products/GetAllProducts`
    );
  }

  GetProductsWithImgs(): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(
      `https://localhost:7018/api/Products/GetAllProducts/GetAllProductsWithImgs`
    );
  }

  getAllCategories(): Observable<Icategory[]> {
    return this.httpClient.get<Icategory[]>(
      `${environment.APIUrl}/Categories/Getcategories`
    );
  }

  getProductsByCatId(catid: number): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(
      `${environment.APIUrl}/Categories/GetProductsByCategoryId/${catid}`
    );
  }
  getProductsById(pid: number): Observable<Iproduct> {
    return this.httpClient.get<Iproduct>(
      `https://localhost:7018/api/Products/GetAllProducts/GetAllProductsWithImgs/${pid}`
    );
  }

  getProductImageById(pid: number): Observable<Iproductimage[]> {
    return this.httpClient.get<Iproductimage[]>(
      `${environment.APIUrl}/Products/GetProductImages/${pid}`
    );
  }

  // getProductsByCategory(categoryId: number) {
  //   return this.httpClient.get(`${environment.APIUrl}/Categories/GetProductsByCategoryId/{{categoryId}}`);
  // }
}
