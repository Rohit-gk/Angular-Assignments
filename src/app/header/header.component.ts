import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
alert :boolean = false;
  appName = "Data Binding using Angular";

  firstName :string  = '';
  lastName :string  = '';
  email :string  = '';
  userName :string = '';
  age: any;
  showAge: any;
  

  constructor() { }

  ngOnInit(){
  }

  openAlert(){
    window.alert('First Name = ' + this.firstName + 'Last Name = ' + this.lastName + 'User Name = ' + this.userName + 'Email = ' + this.email);
  }
  

  ageCalculator(){
    if(this.age){
      const convertAge = new Date(this.age);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    }
  }
}
