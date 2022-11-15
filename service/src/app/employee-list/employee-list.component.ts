import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
  <h2>Employee List</h2>
  <ul *ngFor="let employee of employeeList">
    <li>{{employee.name}}</li>
  </ul>
  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }

  public employeeList=[
    {"id":1, "name": "John", "age": 30},
    {"id":2, "name": "Siva", "age": 25},
    {"id":3, "name": "Tamil", "age": 26},
    {"id":4, "name": "Sethu", "age": 28}
  ];

  ngOnInit(): void {
  }

}
