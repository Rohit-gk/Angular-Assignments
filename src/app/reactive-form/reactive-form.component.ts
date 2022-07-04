import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Size } from "../reactive-form/size";
import { blood } from './blood';
import { relevance } from './relevance';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  ts = Size
  blood = blood
  relevance = relevance

  registerForm: any = FormGroup;
  submitted = false;
  age: any;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      empno: ['', Validators.required],
      firstName: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      middleName: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      dept: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      workPhone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      salaryDueOn: ['', Validators.required],
      location: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      dateOfjoining: ['', Validators.required],
      mobileNo: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tags: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      birthDate: ['', Validators.required],
      tshirtSize: ['',],
      martialStatus: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      bloodGroup: ['',],
      age: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(3)]],
      jobDesc: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      aboutMe: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      askExpertise: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      presentAddress: ['', Validators.required],
      residencephone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],

      addrows: this.formBuilder.array([]),
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    console.log(JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  addNewRow() {
    this.addrow.push(this.formBuilder.group({
      prevCompanyName: ['', Validators.required],
      jobTitle: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      jobDescription: ['', Validators.required],
      relevance: ['', Validators.required],
    }));
  }

  get addrow() {
    return this.registerForm.get('addrows') as FormArray;
  }

  ageCalculate(){
    let currentYear = new Date();
    let dob = new Date(this.registerForm.value.birthDate);
    let year = dob.getFullYear();
    let currentYearValue = currentYear.getFullYear()
    this.age = currentYearValue-year;
  }
}



