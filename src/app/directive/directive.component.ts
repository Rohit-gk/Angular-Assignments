import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  display = true;
  color:any = 'red'

  constructor() { }

  ngOnInit(){
  }

  customerlist:any = [
    {fname:'Rohit',lname:'Kalebag',zip:'src.zip',mobile:'8484062100'},
    {fname:'Pravin',lname:'Chavhan',zip:'git.zip',mobile:'8484062100'},
    {fname:'Dada',lname:'Chavhan',zip:'vscode.zip',mobile:'8484062100'},
    {fname:'Dipak',lname:'Bhagade',zip:'src.zip',mobile:'8484062100'},
    {fname:'Amol',lname:'Pawar',zip:'src.zip',mobile:'8484062100'},
    {fname:'Bharat',lname:'Pawar',zip:'src.zip',mobile:'8484062100'},
    {fname:'Rahul',lname:'Dhavale',zip:'src.zip',mobile:'8484062100'},
    {fname:'Shubham',lname:'Todkar',zip:'src.zip',mobile:'8484062100'},
    {fname:'Rutu',lname:'Shaha',zip:'src.zip',mobile:'8484062100'},
    {fname:'Pranav',lname:'Patil',zip:'src.zip',mobile:'8484062100'},
  ]

  
  show(){
    this.display = !this.display;
    return this.display;
  }
}
