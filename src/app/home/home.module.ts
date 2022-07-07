import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemService } from '../services/item.service';
import { EmployeeService } from '../services/employee.service';
import { DatalistComponent } from './datalist/datalist.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    RegisterComponent,
    DatalistComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ],
})
export class HomeModule { }
