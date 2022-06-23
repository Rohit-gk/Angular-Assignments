import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-studentAddUpdate',
  templateUrl: './studentAddUpdate.component.html',
  styleUrls: ['./studentAddUpdate.component.css']
})
export class StudentAddUpdateComponent implements OnInit {

  @Output() student: EventEmitter<any> = new EventEmitter();
  @Input() stuData: any = null;

  userForm: FormGroup;
  listData: any = [];

  constructor(private fb: FormBuilder) {
    this.listData = [];
    this.userForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      mobile: ['', Validators.required],
      dob: ['', Validators.required],
    })
  }

  ngOnChanges() {
    if (this.stuData != null) {
      this.fillForm(this.stuData);
    }
  }

  ngOnInit() {

  }

  AddItem() {
    this.listData.push(this.userForm.value);
    this.student.emit(this.listData);
    this.userForm.reset();
  }

  Reset() {
    this.userForm.reset();
  }

  fillForm(item: any) {
    debugger
    this.userForm.controls['fname'].setValue(item.fname);
    this.userForm.controls['lname'].setValue(item.lname);
    this.userForm.controls['mobile'].setValue(item.mobile);
    this.userForm.controls['dob'].setValue(item.dob);
    this.userForm.updateValueAndValidity();
  }

}