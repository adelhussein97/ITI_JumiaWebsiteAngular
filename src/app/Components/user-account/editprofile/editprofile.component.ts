import { Component } from '@angular/core';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent {
  user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com'
  };

  saveChanges() {
    // TODO: Implement logic to save changes to the user profile
  }

  cancelChanges() {
    // TODO: Implement logic to cancel changes and navigate back to the profile page
  }

}
