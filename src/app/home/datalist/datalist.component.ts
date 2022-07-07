import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.css']
})
export class DatalistComponent implements OnInit {

  DummyDataList: any = [];
  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.empService.getDummyData().subscribe((data) => {
      this.DummyDataList = data;
    })
  }

}
