import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding-comp',
  templateUrl: './data-binding-comp.component.html',
  styleUrls: ['./data-binding-comp.component.css']
})
export class DataBindingCompComponent {

                              // data biniding
  msg = "good morning "
  txt ="Angular is Fronted Framework "
  imagepath = "assets/images/1.jpg"

  greeting=""


  num1: number=0;
  num2: number=0;

                              // event handling 
  name=""

sayHello()
{
  this.name= "LR";
}

notHello()
{
  this.name = "";
}


globalval :any
fun1(val:any)
{
  this.globalval =val
  console.log(val)
}

sum :number=0
add(no1: any , no2 : any )
{
  this.sum = parseInt(no1)+parseInt(no2)
}


massage:any 
KeyEvent(e:any)
{
  this.massage = e.target.value
}



dropdwonvalue  :  any 
setdropdwonvalue(drpvalue : any)
{
   this.dropdwonvalue = drpvalue.target.value
}


}
