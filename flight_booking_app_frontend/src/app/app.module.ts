import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightSearchComponent } from './components/flight-search/flight-search.component';
import { NavComponent } from './components/nav/nav.component';
import { JumboComponent } from './components/jumbo/jumbo.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturesComponent } from './components/features/features.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FlightsComponent } from './components/flights/flights.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationService } from './service/authentication/authentication.service';
import { UserService } from './service/user.service';
// import { Router } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    FlightSearchComponent,
    NavComponent,
    JumboComponent,
    FooterComponent,
    FeaturesComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    FlightsComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, 
    ReactiveFormsModule,
  ],
  providers: [AuthenticationService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
