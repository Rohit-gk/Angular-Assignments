import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor() { }
  ExpenseList: any = [];

  getExpenses() {
    return this.ExpenseList;
  }

  addExpenses(expense: any) {
    this.ExpenseList.unshift(expense);
  }

  deleteExpenses(index: Number) {
    this.ExpenseList.splice(index, 1);
  }
}
