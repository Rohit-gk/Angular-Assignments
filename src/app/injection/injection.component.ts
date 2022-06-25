import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DependencyService } from '../service/dependency.service';

@Component({
  selector: 'app-injection',
  templateUrl: './injection.component.html',
  styleUrls: ['./injection.component.css']
})
export class InjectionComponent implements OnInit {

  userForm: FormGroup;
  listData: any = [];

  january = 0;
  february = 0;
  march = 0;
  april = 0;
  may = 0;
  june = 0;

  constructor(private fb: FormBuilder, private dependService: DependencyService) {
    this.userForm = this.fb.group({
      expense: ['', Validators.required],
      amount: ['', Validators.required],
      date: ['', Validators.required],
    })
  }

  ngOnInit() {
    this.listData = this.dependService.getItems();
  }

  AddItem() {
    var date = new Date(this.userForm.value.date);
    var month = date.getMonth();
    if(month == 0){
      this.january = this.january + parseInt(this.userForm.value.amount);
    } else if(month == 1){
      this.february = this.february + parseInt(this.userForm.value.amount);
    } else if(month == 2){
      this.march = this.march + parseInt(this.userForm.value.amount);
    } else if(month == 3){
      this.april = this.april + parseInt(this.userForm.value.amount);
    } else if(month == 4){
      this.may = this.may + parseInt(this.userForm.value.amount);
    } else if(month == 5){
      this.june = this.june + parseInt(this.userForm.value.amount);
    }
    this.dependService.addItem(this.userForm.value);
    this.userForm.reset();
    this.listData = this.dependService.getItems();
  }

  removeItem(item:any, index:any){
    var date = new Date(item.date);
    var month = date.getMonth();
    if(month == 0){
      this.january = this.january - parseInt(item.amount);
    } else if(month == 1){
      this.february = this.february - parseInt(item.amount);
    } else if(month == 2){
      this.march = this.march - parseInt(item.amount);
    } else if(month == 3){
      this.april = this.april - parseInt(item.amount);
    } else if(month == 4){
      this.may = this.may - parseInt(item.amount);
    } else if(month == 5){
      this.june = this.june - parseInt(item.amount);
    }
    this.dependService.removeItem(index);
    this.listData = this.dependService.getItems();
  }

}
