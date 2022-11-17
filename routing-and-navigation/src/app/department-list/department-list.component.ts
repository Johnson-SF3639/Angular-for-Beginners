import { Component, OnInit } from '@angular/core';
import { ParamMap, Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-department-list',
  template: `
  <h3> Department List </h3>
  <ul>
    <li class="list" [class.selected]="IsSelected(department)" *ngFor="let department of departments" (click)="OnSelect(department)">{{department.id}} {{department.name}}</li>
  </ul>
  `,
  styleUrls: ['./department-list.component.css']
})

export class DepartmentListComponent implements OnInit {

  constructor(private route : ActivatedRoute, private router: Router) { }

  public selectedId: any;

  public departments = [
    { "id": 1, "name": "Angular"},
    { "id": 2, "name": "Node"},
    { "id": 3, "name": "MongoDB"},
    { "id": 4, "name": "Ruby"},
    { "id": 5, "name": "Bootstrap"},
  ];

  OnSelect(department:any){
    // this.router.navigate(['/departments', department.id]);
    this.router.navigate([department.id], {relativeTo : this.route})

  }
  
  IsSelected(department:any){
    return department.id === this.selectedId;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params :ParamMap) => {
      let id = parseInt(params.get('id')!);
      this.selectedId = id;
    })
  }
}