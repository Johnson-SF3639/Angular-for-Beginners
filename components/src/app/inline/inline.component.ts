import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline',
  template: `<div>
              <h1>Inline template Component</h1>
            </div>`,
  styles: [`
      div{
        color:red;
      }
    `]
})
export class InlineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
