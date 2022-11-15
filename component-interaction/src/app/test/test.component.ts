import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <button (click)="FireEvent()">Click to send event</button>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input() public parentData : any;

  @Output() public childEvent = new EventEmitter();

  constructor() { }


  ngOnInit(): void {
  }
    FireEvent(){
      this.childEvent.emit("Hey Codevolution");
   }

}
