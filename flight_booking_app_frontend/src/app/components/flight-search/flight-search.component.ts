import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';


@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})


export class FlightSearchComponent implements OnInit {

  from: any = "";
  fromLocation: any = [];
  origin: any;
  fromLocationTemplate: boolean = true;

  to: any = "";
  toLocation: any = [];
  destination: any;
  toLocationTemplate: boolean = false;

  number: any = "1";
  numberOfAdultsTemplate: boolean = false;

  date: any = "";
  departureDateTemplate: boolean = false;

  flights: any;
  flightTemplate: boolean = false;

  booked: boolean = false;
  flightsBook:boolean = false;

  first: string = "";
  last: string= "";

  bookKey: any;
  objBookKey:any;

  firstNameToken: any;
  toFill: any;

  // flightss = {
  //   name: {
  //     last: ''
  //   }
  // }


  constructor(public authenticationService: AuthenticationService) {
    this.checkFlight();


   }

  ngOnInit(): void {
    // localStorage.setItem('flightKey', JSON.stringify(this.flightss))

  }


  handleFromLocation() {

    if (this.from.length > 3) {
      fetch(`http://localhost:5000/city-and-airport-search/${this.from}`)
      .then(response => response.json())
      .then(data => this.fromLocation = data.data)      
    }       
    
  }

  handleOrigin(location: any) {
    this.origin = location;
    this.fromLocationTemplate = false;    
    this.toLocationTemplate = true; 
    this.fromLocation = [];    

  }

  handleToLocation() {

    if (this.to.length > 3) {
      fetch(`http://localhost:5000/city-and-airport-search/${this.to}`)
      .then(response => response.json())
      .then(data => this.toLocation = data.data)      
    }       
    
  }

  handleDestination(location: any) {
    this.destination = location;
    this.toLocationTemplate = false;    
    this.toLocation = [];
    this.numberOfAdultsTemplate = true;
    this.departureDateTemplate = true;
  }

  onFindFlight() {
    
    if (this.date == "") {
      alert("Please choose a date")
    } 
    else if(this.number == "") {
      alert("Please choose adults number")
    } 
    else{
      fetch(`http://localhost:5000/flight-search?originCode=${this.origin.iataCode}&destinationCode=${this.destination.iataCode}&dateOfDeparture=${this.date}&adults=${this.number}`, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
      }
     })
    .then(response => response.json())
    .then(data => {

      this.flights = data.data;
      console.log(this.flights);
      this.numberOfAdultsTemplate = false;
      this.departureDateTemplate = false;
      this.numberOfAdultsTemplate = false;
      this.flightTemplate = true;
      console.log(this.number)
  

      const flightUser: any = localStorage.getItem('token');
      let toFill = JSON.parse(flightUser);

      this.first = toFill.firstName
      this.last = toFill.lastName
      // this.first = toFill.firstName
    })
    .catch((error) => {

      alert(error)
    });
    }
    
  }

  onBookFlight(flight: any) {

    if (this.first == "" && this.last == "") {
      alert("Enter your first and last name")
      return;
    }    
    const data = { flight: flight };
    const name = {
      first: this.first,
      last: this.last
    }
    const dataForBookingFlight = { flight: flight, name: name }
   

    fetch('http://localhost:5000/flight-confirmation', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(dataObject => {
      console.log('Success:', dataObject.data.flightOffers);

      const data = { flight: flight };

      console.log(data);
      

      fetch('http://localhost:5000/flight-booking', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataForBookingFlight),
      })
      .then(response => response.json())
      .then(data => {

        console.log('Success:', data);
        localStorage.setItem('flightKey',JSON.stringify(dataForBookingFlight));
        this.checkFlight();

        this.booked  = true;
        this.flightTemplate = false
        this.flights = []

       

      })
     
      .catch((error) => {

        alert(error)
      });

    })
    .catch((error) => {
      console.error('Error:', error);
      alert(error)
    });
  }

  checkFlight(){
    const flightUser2: any = localStorage.getItem('token');
    let toFill2 = JSON.parse(flightUser2);
    this.bookKey =localStorage.getItem('flightKey');
    this.objBookKey = JSON.parse(this.bookKey);
// console.log('objBookKey', this.objBookKey.name.last);
    // if('flightKey' in localStorage && toFill2.lastName === this.objBookKey.name.first){
      if('flightKey' in localStorage){
      this.flightsBook  = true;
      console.log('checkTrue', this.flightsBook);
  
    } else {
      this.cancelFlight();
    }
  }

  cancelFlight(){
    localStorage.removeItem('flightKey');
    this.flightsBook = false;
    console.log('checkFalse', this.flightsBook);
  }
  
  // logout() {
  //   this.authenticationService.logout();
  //   localStorage.removeItem('token')
// }
}
