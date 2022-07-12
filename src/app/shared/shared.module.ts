import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { DeletemodalComponent } from './deletemodal/deletemodal.component';



@NgModule({
  declarations: [
    DeletemodalComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ]
})
export class SharedModule { }
