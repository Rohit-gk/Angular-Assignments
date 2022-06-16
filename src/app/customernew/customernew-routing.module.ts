import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { ListcustomerComponent } from './listcustomer/listcustomer.component';

const routes: Routes = [
  // { path: '', redirectTo: '/addcutomer', pathMatch: 'full' },
  {path:'listcustomer',component:ListcustomerComponent},
  {path:'addcustomer',component:AddcustomerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomernewRoutingModule { }
