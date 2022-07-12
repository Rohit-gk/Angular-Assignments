import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-loader',
  templateUrl: './test-loader.component.html',
  styleUrls: ['./test-loader.component.css']
})
export class TestLoaderComponent implements OnInit {
 
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
}
