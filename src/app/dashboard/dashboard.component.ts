import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { ItemService } from '../services/item.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  empList:any=[];
  
  constructor(private router:Router,private itemService:ItemService,private empService:EmployeeService) {}

  ngOnInit() {
    this.empService.get().subscribe((data) => {
      this.empList = data;
    })
  }

  logout() {
    this.itemService.removeToken();
    this.router.navigate(['login'])
  }

}
