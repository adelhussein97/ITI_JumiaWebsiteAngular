import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Model/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://localhost:7018/api/Auth';
  private GetUserData = 'https://localhost:7018/api/Auth';
  constructor(private http: HttpClient) {}
  updateUserName(
    userId: string,
    firstname: string,
    lastname: string,
    city: string,
    FullAddress: string,
    Email: string
  ) {
    const url = `${this.apiUrl}/${userId}`;
    const body = {
      FirstName: firstname,
      LastName: lastname,
      city: city,
      FullAddress: FullAddress,
      Email: Email,
    };
    return this.http.put(url, body);
  }

  getUSerById(pid: string): Observable<User> {
    return this.http.get<User>(`${this.GetUserData}/${pid}`);
  }
}
