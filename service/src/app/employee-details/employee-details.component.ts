import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  template: `
  <h2>Employee List</h2>
  <ul *ngFor="let employee of employeeList">
    <li>{{employee.id}} {{employee.name}}  {{employee.age}}</li>
  </ul>
  `,
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

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
