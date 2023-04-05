import { Component, OnInit } from '@angular/core';
import { AuthServicesService } from '../../../services/auth-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private _auth: AuthServicesService, private Router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  register_User_data = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
  };
  register_User() {
    this._auth.registerUser(this.register_User_data).subscribe(
      (Res: any) => {
        localStorage.setItem('token', Res.token);
        this.Router.navigate(['/login']);
      },
      (Err) => console.log(Err)
    );
  }
}
