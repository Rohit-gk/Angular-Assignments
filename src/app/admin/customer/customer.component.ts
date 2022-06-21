import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  add() {
    let id = (<HTMLInputElement>document.getElementById("id-in")).value;
    alert(id)
  }

  ngOnInit(){
  }

}
