import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{name}}
    </h2>
    <h2>{{2+2}}</h2>
    <h2>{{"Welcome "+ name}}</h2>
    <h2>{{name.length}}</h2>
    <h2>{{name.toUpperCase()}}</h2>
    <h2>{{greetUser()}}</h2>
    <h2>{{siteURL}}</h2>

  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "John";
  public siteURL = window.location.href;
  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Hello " + this.name;
  }

}
