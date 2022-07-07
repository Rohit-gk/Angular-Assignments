import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DatalistComponent } from './datalist/datalist.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
     path:'', component: HomeComponent ,
     children: [
    { 
      path: 'about', component: AboutComponent 
    },
    { 
      path: 'contact', component: ContactComponent 
    },
    {
       path: 'login', component: LoginComponent
    },
    {
       path: 'register', component: RegisterComponent 
    },
    {
       path: '', component: DatalistComponent 
    },

  ] 
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
