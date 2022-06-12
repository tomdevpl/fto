import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  addUser(user: any) {
    let users = [];
    let temp: any = '';
    if(localStorage.getItem('Users')) {
      temp = localStorage.getItem('Users')
      users = JSON.parse(temp);
      users = [user, ...users];
    } else {
      users = [user];
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }
}
