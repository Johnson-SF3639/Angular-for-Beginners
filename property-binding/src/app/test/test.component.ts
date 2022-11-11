import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>
    Good morning {{name}}
  </h2>
  
  <input [id]="myId" type="text" value="John">
  <input bind-disabled="IsDisabled" id="{{myId}}" type="text" value="John">
 
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "All";
  public myId = "checking";
  public IsDisabled = false;

  constructor() { }

  ngOnInit(): void {
  }

}
