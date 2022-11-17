import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  ParamMap,  Router } from '@angular/router';

@Component({

  selector: 'app-department-details',
  template: `
  <h3> You selected department with id = {{departmentId}} </h3>

  <p>
    <button (click)="showOverview()">Show Overview</button>
    <button (click)="showContact()">Show Cantact</button>
  </p>

  <router-outlet></router-outlet>

  <div>
    <button (click)="goToDepartment()">Back</button>
  </div>
  
  `,

  styleUrls: ['./department-details.component.css']

})
export class DepartmentDetailsComponent implements OnInit {

  public departmentId: number = 0;
  constructor(private route : ActivatedRoute, private router : Router) { }


  goToDepartment(){
    let selectedId = this.departmentId ? this.departmentId : null; 
    this.router.navigate(['../',{id :selectedId}],{relativeTo : this.route});
  }
  
  showOverview(){
    this.router.navigate(['overview'], {relativeTo : this.route})
  }
  
  showContact(){
    this.router.navigate(['contact'], {relativeTo : this.route})
  }
  
  ngOnInit(): void {
    // let id:any = parseInt(this.route.snapshot.paramMap.get('id')!);
    // this.departmentId = id;
    this.route.paramMap.subscribe((params :ParamMap) => {
      let id = parseInt(params.get('id')!);
      this.departmentId = id;
    })
  }


}
