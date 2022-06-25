import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DependencyService {

  constructor() { }
  itemList: any = [];

  getItems() {
    return this.itemList;
  }

  addItem(item: any) {
    this.itemList.push(item);
  }

  removeItem(index: any) {
    this.itemList.splice(index, 1);
  }

}
