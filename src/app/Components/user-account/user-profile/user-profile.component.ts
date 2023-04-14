import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  constructor(private _user: UserService) {}
  USerData: User = {} as User;
  ngOnInit(): void {
    let returnDataFromUser = this._user
      .getUSerById(localStorage.getItem('UserId')!)
      .subscribe((data) => {
        this.USerData.email = data.email;
        this.USerData.city = data.city ?? 'unknown';
        this.USerData.firstname = data.firstname;
        this.USerData.lastname = data.lastname;
        this.USerData.fullAddress = data.fullAddress ?? 'unknown';
      });
    console.log(this.USerData);
  }
}
