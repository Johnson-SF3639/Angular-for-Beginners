import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>{{name}}</h2>
  <h2>{{name | uppercase}}</h2>
  <h2>{{name | lowercase}}</h2>
  <h2>{{message | titlecase}}</h2>
  <h2>{{message | slice:4:14}}</h2>
  <h2>{{person | json}}</h2>

  <h2>{{5.678 | number: '1.2-3'}}</h2>
  <h2>{{5.678 | number: '3.4-5'}}</h2>
  <h2>{{5.678 | number: '3.1-2'}}</h2>

  <h2>{{0.25 | percent}}</h2>

  <h2>{{0.25 | currency}}</h2>
  <h2>{{0.25 | currency : 'EUR'}}</h2>
  <h2>{{0.25 | currency : 'EUR' : 'code'}}</h2>

  <h2>{{date}}</h2>
  <h2>{{date |date:'short'}}</h2>
  <h2>{{date | date:'shortDate'}}</h2>
  <h2>{{date | date:'shortTime'}}</h2>

  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  public name = 'Code volution';
  public message = 'Welcome to code volution';
  public person = {
    "firstName" : "John",
    "lastName" : "son"
  }
  public date = new Date();

  ngOnInit(): void {
  }

}
