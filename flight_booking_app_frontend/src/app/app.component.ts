import { Component } from '@angular/core';
import { AuthenticationService } from './service/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
//   title = 'login-form';

constructor(public authenticationService: AuthenticationService) { this.authenticationService.checkToken();
}

ngOnInit(): void {
  // this.authenticationService.checkToken();
}
}
