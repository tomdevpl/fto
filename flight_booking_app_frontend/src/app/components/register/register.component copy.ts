// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {

//   // alert:boolean=false

//   register = new FormGroup({
//     firstName: new FormControl(''),
//     lastName: new FormControl(''),
//     email: new FormControl(''),
//     password: new FormControl(''),
//   })

//   isFormValid = false;
//   userCreated = false;

//   ngOnInit(): void {
//   }

//   collectUser(registerForm: any){
//     // console.warn(this.register.value)
//     localStorage.setItem('user', JSON.stringify(this.register.value));

//     if (!registerForm.valid) {
//       this.isFormValid = true;

//       return;
//     }
//     this.userCreated = true;
//     this.register.reset();
//   }

// }
