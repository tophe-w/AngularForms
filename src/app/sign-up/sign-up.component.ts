import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
    model = new User('','','','');
    submitted = false;

    constructor() { }

    onSubmit() {
        this.submitted = true;

      console.log(this.model);
    }
}
export class User {

        email: string;
        firstname: string;
        lastname: string;
        password: string;

  constructor(email: string, firstname: string, lastname: string, password: string)
    {
      this.email = email;
      this.firstname = firstname;
      this.lastname = lastname;
      this.password = password;}
  }
