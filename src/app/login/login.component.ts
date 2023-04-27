import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router) {

  }

  public isRegister: boolean = false;


  public toggleLogIn() {
    if (this.isRegister) {
      this.isRegister = false;
    } else {
      this.isRegister = true;
    }
  }

  public success() {
    this.router.navigate(["/main"])
  }


}
