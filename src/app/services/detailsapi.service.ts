import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsapiService {


    httpaHeader={};
  constructor(private httpClient:HttpClient) {
    this.httpaHeader={
     httpaHeader:new HttpHeaders({
      'content-type':'application/json'
    })
    }
   }
    }

