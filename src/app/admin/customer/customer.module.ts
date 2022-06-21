import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [CustomerComponent, ListComponent, AddComponent, EditComponent],
  imports: [CommonModule, CustomerRoutingModule],
})
export class CustomerModule { }
