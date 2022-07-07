import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  empForm:any= FormGroup;
  empList:any=[];
  submitted = false;

  constructor(private router:Router,private empService:EmployeeService,private itemService:ItemService,private fb: FormBuilder) {
    this.empForm = this.fb.group({
      firstName: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      bloodGroup: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      location: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      jobDesc:['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      expertise:['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      aboutme:['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      department:['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      isActive:[true]
    })
   }

  ngOnInit(){
    this.empService.get().subscribe((data)=>{
      this.empList = data;
    })
  }

  logout(){
    this.itemService.removeToken();
    this.router.navigate(['login'])
  }

  addEmployee() {
    this.submitted = true;
    if (this.empForm.invalid) {
      return;
    }
    this.empService.add(this.empForm.value).subscribe(response => {
       this.router.navigate(['/dashboard/employee/list'])
    })
  }

  cancel() {
    this.submitted = false;
    this.empForm.reset();
  }


  editEmployee(value: any){
    this.empService.update(this.empForm.value).subscribe(response => {
        console.log(response);
      })
  }


  deleteEmployee(data:number) {
    this.empService.delete(data).subscribe(response => {
      location.reload();
    })
  }

  get f() { return this.empForm.controls; }

}

