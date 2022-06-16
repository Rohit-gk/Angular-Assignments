import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomernewRoutingModule } from './customernew-routing.module';
import { ListcustomerComponent } from './listcustomer/listcustomer.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';


@NgModule({
  declarations: [
    ListcustomerComponent,
    AddcustomerComponent
  ],
  imports: [
    CommonModule,
    CustomernewRoutingModule
  ]
})
export class CustomernewModule { }
