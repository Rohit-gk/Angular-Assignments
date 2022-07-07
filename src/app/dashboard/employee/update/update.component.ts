import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  empForm: FormGroup = new FormGroup({});
  empList: any = [];
  submitted = false;
  urlid: any;

  constructor(private activate: ActivatedRoute, private router: Router, private empService: EmployeeService, private itemService: ItemService, private fb: FormBuilder) { }

  ngOnInit() {
    this.empForm = new FormGroup({
      id: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      mobileNumber: new FormControl(''),
      bloodGroup: new FormControl(''),

      location: new FormControl(''),
      jobDesc: new FormControl(''),
      expertise: new FormControl(''),
      aboutme: new FormControl(''),
      department: new FormControl(''),

      isActive: new FormControl(true)
    })

    this.empService.get().subscribe(res => {
      this.empList = res.result;
      for (let i = 0; i < this.empList.length; i++) {
        if (this.urlid == this.empList[i].id) {
          this.empForm.controls['id'].setValue(this.empList[i].id);
          this.empForm.controls['firstName'].setValue(this.empList[i].firstName);
          this.empForm.controls['lastName'].setValue(this.empList[i].lastName);
          this.empForm.controls['mobileNumber'].setValue(this.empList[i].mobileNumber);
          this.empForm.controls['bloodGroup'].setValue(this.empList[i].bloodGroup);
          this.empForm.controls['location'].setValue(this.empList[i].location);
          this.empForm.controls['jobDesc'].setValue(this.empList[i].jobDesc);
          this.empForm.controls['expertise'].setValue(this.empList[i].expertise);
          this.empForm.controls['aboutme'].setValue(this.empList[i].aboutme);
          this.empForm.controls['department'].setValue(this.empList[i].department);
        }
      }
    })
    this.urlid = this.activate.snapshot.paramMap.get('id');
  }

  logout() {
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

  updateEmployee() {
    this.empService.update(this.empForm.value).subscribe(data => {
      console.log(data);
      this.router.navigate(['/dashboard/employee/list'])
    })
  }

  cancel() {
    this.submitted = false;
    this.empForm.reset();
  }

  get f() { return this.empForm.controls; }


}
