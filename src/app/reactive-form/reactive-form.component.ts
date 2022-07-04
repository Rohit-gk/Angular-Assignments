import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Size } from "../reactive-form/size";
import { blood } from './blood';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  ts = Size
  blood = blood

  registerForm: any = FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      empno: ['', Validators.required],
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      dept: ['', Validators.required],
      workPhone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      salaryDueOn: ['', Validators.required],
      location: ['', Validators.required],
      dateOfjoining: ['', Validators.required],
      mobileNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tags: ['', Validators.required],
      birthDate: ['', Validators.required],
      tshirtSize: ['',],
      martialStatus: ['', Validators.required],
      bloodGroup: ['',],
      age: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(3)]],
      jobDesc: ['', Validators.required],
      aboutMe: ['', Validators.required],
      askExpertise: ['', Validators.required],
      presentAddress: ['', Validators.required],
      residencephone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],

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
}



