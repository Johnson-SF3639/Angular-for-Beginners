import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`
  <h2>
    Welcome {{name}}
  </h2>
  <h2 class="text-danger">Codevolution</h2>

  <h2 [class]="success">Codevolution</h2>

  <h2 class="text-special" [class]="success">Codevolution</h2>

  <h2 class="text-special">Special Codevolution</h2>

  <h2 [class.text-success]="hasError" >Codevolution</h2>

  <h2 [ngClass]="messageClass">Codevolution</h2>

  `,

  styles: [`
  .text-success {
    color : green;
  }
  .text-danger {
    color : red;
  }
  .text-special {
    font-style : italic;
  }
  `]
})
export class TestComponent implements OnInit {

  constructor() { }

  public name = "John";
  public success = "text-success"
  public hasError = true;
  public isSpecial = true;
  public messageClass = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }


  ngOnInit(): void {
  }

}

