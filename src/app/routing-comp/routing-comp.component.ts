import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing-comp',
  templateUrl: './routing-comp.component.html',
  styleUrls: ['./routing-comp.component.css']
})
export class RoutingCompComponent {

  constructor(private router : Router){}

  studentcompfun()
  {
   this.router.navigate(['/student'])
  }

}
