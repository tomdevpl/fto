import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userKey: any;
  objUserKey:any;
  isAuthenticated = false;
  loginSuccess = false;

  userAuth(user:any){
    let UserArray = [];
    let temp: any = '';
    if(localStorage.getItem('Users')) {
      temp = localStorage.getItem('Users');
      UserArray = JSON.parse(temp)
    }
      function findMatch(param: any) {
        if(param.email === user.email){
          console.log('param',param);
          let tokenData = {
            firstName: param.firstName,
            lastName: param.lastName,
            email: param.email,
          }
          localStorage.setItem('token',JSON.stringify(tokenData))
          
        }
        return param.email === user.email && param.password === user.password;
      }

    let solution = UserArray.some(findMatch);
    console.log('solution', solution);
    if(solution){
      this.isAuthenticated = true;
      this.router.navigate(['flights']);
    return true;
    } else {
        this.isAuthenticated = false;
      return false
    }
    
  }

  constructor(private router: Router) { }

  loggedIn(){
    // this.isAuthenticated = true;
    // console.log('token is in memory');
    // this.router.navigate(['flights']);
  }

  logout() {
    this.isAuthenticated = false;
    console.log('token is out');
    this.router.navigate(['home']);
  }

  checkToken(){
    // console.log('testujem', localStorage.getItem('token') === null);
    if('token' in localStorage){
    this.isAuthenticated = true;
    console.log('token is in memory');

    // this.loggedIn();

    } else {
    this.isAuthenticated = false;
    this.router.navigate(['home']);
    // this.logout();
    }
  }
  

}
