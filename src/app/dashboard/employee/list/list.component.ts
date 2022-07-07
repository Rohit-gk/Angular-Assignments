import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  empList:any=[];

  constructor(private empService:EmployeeService,private router:Router) { }

  ngOnInit(){
    this.empService.get().subscribe((data)=>{
      this.empList = data;
    })
  }

  editEmployee(id:number){
    this.router.navigate([`dashboard/employee/update/${id}`]);
  }

  

  deleteEmployee(data:number) {
    if(confirm("Are you sure to delete " + data)) {
      this.empService.delete(data).subscribe(response => {
        location.reload();
      })
    }
  }

  goToAddEmployee(){
    this.router.navigate(['/dashboard/employee/insert']);
  }

}
