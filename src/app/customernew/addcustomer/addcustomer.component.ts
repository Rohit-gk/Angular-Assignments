import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(){
  }

  goToCustomer(){
  this.route.navigate(['/listcustomer']);
  }
}
