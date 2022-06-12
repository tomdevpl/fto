import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { Router } from '@angular/router';


import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

// import { SignInData } from 'src/app/model/user';
// import { SignInData } from 'src/app/model/signInData';


@Component({
  selector: 'cf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // isFormValid = false;
  areCredentialsInvalid = false;
  // loginSuccess = false;

  constructor (public authenticationService: AuthenticationService){}

  ngOnInit() {
  }

  onLogin(signInForm: NgForm) {
   
    const user = this.authenticationService.userAuth(signInForm.value);
    if(user){
      // localStorage.setItem('token', signInForm.value.email);
      // localStorage.setItem('token', JSON.stringify('firstName':user.firstName, 'lastName':user.lastName));
      
      console.log('Login Successful');
      signInForm.reset();
      this.areCredentialsInvalid = false;
    } else {
      console.log('Login not successful');
      this.areCredentialsInvalid = true;
    }
  }

}
