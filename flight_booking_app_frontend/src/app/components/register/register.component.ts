import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // alert:boolean=false
  user: any = {};
  register = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })

  isFormValid = false;
  userCreated = false;

constructor(private userService: UserService){}

  ngOnInit(): void {
  }

  collectUser(registerForm: any){
    // console.warn(this.register.value)
    if(this.register.valid) {
      this.user = Object.assign(this.user, this.register.value);
      this.userService.addUser(this.user);
      this.isFormValid = false;
      this.register.reset();
    } else {
      this.isFormValid = true;
    }
  }

}
