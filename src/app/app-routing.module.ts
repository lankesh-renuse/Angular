import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [

  // redirecting routing
  {
    path: '', redirectTo:'home', pathMatch:'full'
  },

  // child routing
{
  path:'student',children:
  [
    {
      path:'',component:StudentComponent
    },
    {
    path:'stud_details',component:StudentDetailsComponent
    },
    {
      path:'stud_regis',component:StudentRegistrationComponent
    }
  ]
},

// routing
{
  path:'student',component:StudentComponent
},
{
  path:'about',component:AboutComponent
},
{
  path:'contact',component:ContactComponent
},

// wildcard routing 
{
  path:'**',component:PagenotfoundComponent
}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }