import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from './user';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient, private route: Router) {
    console.log("Api service provider from constructor");
  }

  login(param: string) {
    return this.http.post(
      `${environment.baseApiUrl}/Login`, param)
  }

  register(param: string) {
    return this.http.post(
      `${environment.baseApiUrl}/Register`, param)
  };

}













//   postDetails(data:string){
//     return this.http.post<any>(`${baseApiUrl}/Register`,data).subscribe(val=>{
//      alert("registration successfully");
//      this.route.navigate(['login']);
//     });

//  }