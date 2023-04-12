import { Component, OnInit } from '@angular/core';
import { AuthServicesService } from '../../../services/auth-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private _auth: AuthServicesService, private Router: Router) {}
  login_User_data = {
    email: '',
    password: '',
  };
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  login_User() {
    this._auth.LogInUser(this.login_User_data).subscribe(
      (Res: any) => {
        localStorage.setItem('UserId', Res.id);
        localStorage.setItem('token', Res.token);
        this.Router.navigate(['/home']);
      },
      (err: any) => console.log(err)
    );
  }
}
