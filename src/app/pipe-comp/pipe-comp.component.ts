import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-comp',
  templateUrl: './pipe-comp.component.html',
  styleUrls: ['./pipe-comp.component.css']
})
export class PipeCompComponent {
title = 'my-first-app';
todaydate = new Date();
jsonval = {name:'alex', age:'as', address:{a1 :'paris', a2:'france'}};
  months = ['jan', 'feb', 'mar', 'april', 'may',
     'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']


  emp = 
  [
      {
        ename:"jerry",
        country:"us",
        sal:445000,
        gender:'miss'
      },

      {
        ename:"dhiraj",
        country:"us",
        sal:445000,
        gender:'male'
      },

      {
        ename:"swpanali",
        country:"us",
        sal:445000,
        gender:'miss'
      },

      {
        ename:"aakash",
        country:"us",
        sal:445000,
        gender:'male'
      },

      {
        ename:"sandesh",
        country:"us",
        sal:445000,
        gender:'male'
      },

      {
        ename:"raj",
        country:"us",
        sal:445000,
        gender:'male'
      }
  ]


}
