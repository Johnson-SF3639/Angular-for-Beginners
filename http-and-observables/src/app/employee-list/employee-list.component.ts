import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
  <h2>Employee List</h2>
  <h3>{{errorMessage}}</h3>
  <ul *ngFor="let employee of employeeList">
    <li>{{employee.name}}</li>
  </ul>
  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private _employeeService : EmployeeService) { }

  public employeeList:any =[];
  public errorMessage: any;

  ngOnInit(): void {
    this._employeeService.getEmployee().subscribe(data => this.employeeList = data, error => this.errorMessage = error);
  }

}
