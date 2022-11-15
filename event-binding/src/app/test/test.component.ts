import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h1>Home</h1>
  <input #myinput type="text" />
  <button (click)="logMessage(myinput.value)"> Button</button>
  <button (click)="greetMessage($event)"> Button</button>
  {{greeting}}
  `,
  styles: [`
  
  `]
})
export class TestComponent implements OnInit {

  constructor() { }
  public greeting = "";

  ngOnInit(): void {
  }
  
  logMessage(value: any) {
    console.log(value);
  }

  greetMessage(event: any) {
    console.log(event);
    this.greeting = "Welcome Bro";
  }


}
