import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { InsertComponent } from './insert/insert.component';
import { ListComponent } from './list/list.component';
import { TestLoaderComponent } from './test-loader/test-loader.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'',component:EmployeeComponent,

    children: [
      { path: 'list', component: ListComponent },
      { path: 'insert', component: InsertComponent },
      { path: 'update/:id', component: UpdateComponent },
      { path: 'loader', component: TestLoaderComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
