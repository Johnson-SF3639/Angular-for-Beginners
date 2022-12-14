import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

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

  constructor(private _employeeService : EmployeeService) { }

  public employeeList:any;

  ngOnInit(): void {
    this.employeeList = this._employeeService.getEmployee();
  }

}
