import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  template: `
  <h2>Employee List</h2>
  <h3>{{errorMessage}}</h3>
  <ul *ngFor="let employee of employeeList">
    <li>{{employee.id}} {{employee.name}}  {{employee.age}}</li>
  </ul>
  `,
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private _employeeService : EmployeeService) { }

  public employeeList:any =[];
  public errorMessage: any;
  ngOnInit(): void {
    this._employeeService.getEmployee().subscribe(data => this.employeeList = data, error => this.errorMessage = error);
  }

}
