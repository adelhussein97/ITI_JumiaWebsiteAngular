import { Component } from '@angular/core';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent {

  currentPassword: string="";
  newPassword: string="";
  confirmPassword: string="";

  saveChanges() {
    // TODO: Implement logic to save changes to the user's password
  }

  cancelChanges() {
    // TODO: Implement logic to cancel changes and navigate back to the profile page
  }

}
