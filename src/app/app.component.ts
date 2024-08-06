import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';

  loggedIn=false;

num = 12 ;

courses = [  "c","java" ,"c++" , "python"];


student= 
        {
         name:"dhiraj",
         age:25,
         city:"pune",
         marks:90
        }

Employees =
           [
  {
    name:"john",
    sal:250000,
    country:"uk",
    deptno:20,
    role:"maneger"

  },
  {
    name:"akash",
    sal:250000,
    country:"uk",
    deptno:20,
    role:"maneger"
    
  },
  {
    name:"dhiraj",
    sal:250000,
    country:"uk",
    deptno:20,
    role:"maneger"

  },
  {
    name:"swpanil",
    sal:250000,
    country:"uk",
    deptno:20,
    role:"maneger"

  }

            ]


}

