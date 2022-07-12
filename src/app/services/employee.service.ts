import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ItemService } from './item.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  hide() {
    throw new Error('Method not implemented.');
  }
  show() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient, private route: Router, private itemService: ItemService) { }

  get() {
    return this.http.get<any>(
      'https://tech-resources-core-api.azurewebsites.net/Employee',
    );
  }

  add(data: any) {
    return this.http.post(
      'https://tech-resources-core-api.azurewebsites.net/Employee', data,
    );
  }

  update(data: any): Observable<any> {
    return this.http.put(`${environment.baseApiUrl}/Employee`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${environment.baseApiUrl}/Employee/${id}`,)
  }

  login(param: string) {
    return this.http.post<any>(
      `${environment.baseApiUrl}/Login`, param)
  }

  register(param: string) {
    return this.http.post<any>(
      `${environment.baseApiUrl}/Register`, param)
  };

  getDummyData() {
    return this.http.get(
      'https://jsonplaceholder.typicode.com/users',
    );
  }

  getLoader() {
    return this.http.get(
      'http://www.mocky.io/v2/5ec6a61b3200005e00d75058',
    );
  }
}
