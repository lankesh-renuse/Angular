import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment-comp',
  templateUrl: './assignment-comp.component.html',
  styleUrls: ['./assignment-comp.component.css']
})
export class AssignmentCompComponent {

  user=
  [
    {
      uid:1,
      email:"abc@gmail.com",
      password:1233455
    },
    {
      uid:2,
      email:"cds@gmail.com",
      password:321234
    },
    {
      uid:3,
      email:"xyz@gmail.com",
      password:12253
    },
    {
      uid:4,
      email:"zxy@gmail.com",
      password:928553957
    }
  ]

  person=
  [
    {
      pid:1,
      pname:"dhiraj",
      country:"india"
     },
     {
      pid:2,
      pname:"dhiraj",
     country:"india"
    },
    {
    pid:3,
    pname:"dhiraj",
    country:"india"
    },
   {
    pid:4,
    pname:"dhiraj",
    country:"india"
     },
   
  ]
  

}
