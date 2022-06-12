import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  // menuItems = [
  //   {linkId:1, linkName: "Home", linkUrl: 'home'},
  //   {linkId:2, linkName: "Flight", linkUrl: 'flights', },
  //   {linkId:3, linkName: "Login", linkUrl: 'login'},
  //   {linkId:4, linkName: "Register", linkUrl: 'register'}
  // ]

  title = 'login-form';

  
constructor(public authenticationService: AuthenticationService) { }

loggedIn(){
  this.authenticationService.loggedIn();
  return localStorage.getItem('token');
}

logout() {
  this.authenticationService.logout();
  localStorage.removeItem('token')
}

// checkToken(){
//   if(localStorage.getItem('token')){
//   this.authenticationService.loggedIn();
//   } else {
//     this.authenticationService.logout();
//   }
// }

  navbarCollapsed = true; 

   //define the toogle property
   public toggle : boolean = false;

   clickEvent(event:any){
      //if you just want to toggle the class; change toggle variable.
      this.toggle = !this.toggle;       
   }

  ngOnInit(): void {
    this.authenticationService.checkToken();
  }

}


