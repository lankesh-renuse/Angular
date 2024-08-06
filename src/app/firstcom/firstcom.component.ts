import { Component } from '@angular/core';

@Component({
  selector: 'app-firstcom',
  templateUrl: './firstcom.component.html',
  styleUrls: ['./firstcom.component.css']
})
export class FirstcomComponent {

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
