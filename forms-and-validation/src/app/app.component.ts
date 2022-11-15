import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { EnrollmentService } from './enrollment.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'forms-and-validation';
  topicHasError =true;
  topics = ['React', 'Angular', 'Vue'];
  userModel = new User('John','john@gmail.com',1234567890,'default','morning',true);
  
  constructor(private _enrollmentService : EnrollmentService){}

  validateTopic(value : any){
    if(value === 'default'){
      this.topicHasError =true;
    }
    else{
      this.topicHasError =false;
    }
  }

  OnSubmit(){
    this._enrollmentService.enroll(this.userModel) 
    .subscribe(
      data => console.log('Success!',data),
      error => console.log('Error!',error),
    )
  }

}
