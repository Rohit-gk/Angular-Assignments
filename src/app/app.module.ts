import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeInterceptor } from './employee.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:EmployeeInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
