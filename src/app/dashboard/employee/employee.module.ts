import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestLoaderComponent } from './test-loader/test-loader.component';

import { SharedModule } from 'src/app/shared/shared.module';

import { NgxSpinnerModule } from "ngx-spinner"; 


@NgModule({
  declarations: [
    EmployeeComponent,
    InsertComponent,
    UpdateComponent,
    ListComponent,
    TestLoaderComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    SharedModule,
  ]
})
export class EmployeeModule { }
