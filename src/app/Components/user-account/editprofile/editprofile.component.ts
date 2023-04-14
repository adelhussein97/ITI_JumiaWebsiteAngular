import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/Model/user';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css'],
})
export class EditprofileComponent implements OnInit {
  constructor(private userService: UserService, private _location: Location) {}
  USerData: User = {} as User;
  ngOnInit(): void {
    let returnDataFromUser = this.userService
      .getUSerById(localStorage.getItem('UserId')!)
      .subscribe((data) => {
        this.USerData.email = data.email;
        this.USerData.city = data.city;
        this.USerData.firstname = data.firstname;
        this.USerData.lastname = data.lastname;
        this.USerData.fullAddress = data.fullAddress;
      });
    console.log(this.USerData);
  }
  userId = localStorage.getItem('UserId')!;

  firstName: string = this.USerData.firstname;
  LastName: string = this.USerData.lastname;
  Email: string = this.USerData.email;
  city: string = this.USerData.city;
  FullAddress: string = this.USerData.fullAddress;
  updateName() {
    this.userService
      .updateUserName(
        this.userId,
        this.firstName,
        this.LastName,
        this.city,
        this.FullAddress,
        this.Email
      )
      .subscribe(
        () => {
          console.log('Name updated successfully');
        },
        (error) => {
          console.log('Error updating name:', error);
        }
      );
  }
  sucess() {
    this._location.back();
  }

  saveChanges() {
    // TODO: Implement logic to save changes to the user profile
  }

  cancelChanges() {
    // TODO: Implement logic to cancel changes and navigate back to the profile page
  }
}
