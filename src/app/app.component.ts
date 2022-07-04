import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'reactive-forms';
  constructor(private http:HttpClient){

  }

  

  ngOnInit(): void {
    // this.http.get("https://random-data-api.com/api/address/random_address").toPromise();
    // .toPromise().then((data) => 
    // { console.log(JSON.stringify(data)); 
    // })
    // console.log();
  }
}
