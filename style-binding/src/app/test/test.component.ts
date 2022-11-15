import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h1>Hello</h1>

  <h2 [style.color]="'blue'">Style Component</h2>
  <h2 [style.color]="hasError ? 'red' : 'blue'">Style Component</h2>
  <h2 [style.color]="highLightColor">Style Component</h2>
  <h2 [ngStyle]="testStyles">Style Component</h2>
  
  `,
  styles: [`


  `]
})
export class TestComponent implements OnInit {

  public hasError = true;
  public isSpecial = true;
  public highLightColor = "Orange";

  public testStyles = {
    fontStyle : "italic",
    color :'green'
  }

  constructor() { }
  ngOnInit(): void {
  }

}
