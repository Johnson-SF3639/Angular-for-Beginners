import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

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

  constructor(private _employeeService : EmployeeService) { }

  public employeeList:any;

  ngOnInit(): void {
    this.employeeList = this._employeeService.getEmployee();
  }

}
