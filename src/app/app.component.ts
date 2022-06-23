import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-interaction';

  listDataArray:any=[];
  stuData: any;

  studentData(event:any){
    this.listDataArray = event;
    console.log("Main:", this.listDataArray)
  }

  editdata(event:any){
     this.stuData = event;
  }
}
