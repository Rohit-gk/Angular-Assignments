import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExpenseService } from '../core/expense.service';
@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  expenseForm: FormGroup;
  expenseData: any = [];

  monthList = [
    { id: 0, name: 'January', value: 0 },
    { id: 1, name: 'February', value: 0 },
    { id: 2, name: 'March', value: 0 },
    { id: 3, name: 'April', value: 0 },
    { id: 4, name: 'May', value: 0 },
    { id: 5, name: 'June', value: 0 },
    { id: 6, name: 'July', value: 0 },
    { id: 7, name: 'August', value: 0 },
    { id: 8, name: 'Septmber', value: 0 },
    { id: 9, name: 'Octber', value: 0 },
    { id: 10, name: 'Novmber', value: 0 },
    { id: 11, name: 'December', value: 0 }
  ]

  constructor(private fb: FormBuilder, private expensesService: ExpenseService) {
    this.expenseForm = this.fb.group({
      expense: ['', Validators.required],
      amount: ['', Validators.required],
      date: ['', Validators.required],
    })
  }

  ngOnInit() {
    this.expenseData = this.expensesService.getExpenses();
  }

  AddExpenses() {
    var date = new Date(this.expenseForm.value.date);
    if (this.expenseForm.invalid) {
     return
    }
    var month = date.getMonth();
    for (let i = 0; i < this.monthList.length; i++) {
      if (this.monthList[i].id == month) {
        this.monthList[i].value = this.monthList[i].value + parseInt(this.expenseForm.value.amount);
        break;
      }
    }
    this.expensesService.addExpenses(this.expenseForm.value);
    this.expenseForm.reset();
    this.expenseData = this.expensesService.getExpenses();
  }

  removeExpense(expense: any, index: Number) {
    var date = new Date(expense.date);
    var month = date.getMonth();
    for (let i = 0; i < this.monthList.length; i++) {
      if (this.monthList[i].id == month) {
        this.monthList[i].value = this.monthList[i].value - parseInt(expense.amount);
        break;
      }
    }
    this.expensesService.deleteExpenses(index);
    this.expenseData = this.expensesService.getExpenses();
  }

  get validation() {
    return this.expenseForm.controls;
  }

}


