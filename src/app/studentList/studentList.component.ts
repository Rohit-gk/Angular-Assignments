import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-studentList',
  templateUrl: './studentList.component.html',
  styleUrls: ['./studentList.component.css']
})
export class StudentListComponent implements OnInit {
  @Input() listDataArray: any = [];
  @Output() stud_parent: EventEmitter<any> = new EventEmitter();

  userForm: FormGroup;
  listData: any;

  constructor(private fb: FormBuilder) {
    this.listData = [];
    this.userForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      mobile: ['', Validators.required],
      dob: ['', Validators.required],
    })
  }

  ngOnInit() {
  }

  remove(element: any) {
    this.listDataArray.forEach((value: any, index: any) => {
      if (value == element)
        this.listDataArray.splice(index, 1)
    })
  }

  fillForm(item: any) {
    this.stud_parent.emit(item);
  }
}