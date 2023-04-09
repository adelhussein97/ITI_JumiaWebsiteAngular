import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServicesService {
  private _Api_signUp_Url = 'https://localhost:7018/api/Auth/Register';
  private _Api_logIn_Url = 'https://localhost:7018/api/Auth/Login';
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  registerUser(user: any) {
    return this.http.post<any>(this._Api_signUp_Url, user);
  }
  LogInUser(User: any) {
    return this.http.post(this._Api_logIn_Url, User);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }
  LogOut() {
    localStorage.removeItem('token');
  }

  cartSubject=new Subject<any>(); 
}
