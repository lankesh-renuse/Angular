import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstcomComponent } from './firstcom/firstcom.component';
import { SecondcompComponent } from './secondcomp/secondcomp.component';
import { AssignmentCompComponent } from './assignment-comp/assignment-comp.component';
import { DataBindingCompComponent } from './data-binding-comp/data-binding-comp.component';
import { FormsModule } from '@angular/forms';
import { PipeCompComponent } from './pipe-comp/pipe-comp.component';
import { PowerPipe } from './power.pipe';
import { GenPipe } from './gen.pipe';
import { StudentComponent } from './student/student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RoutingCompComponent } from './routing-comp/routing-comp.component';
import { AppRoutingModule } from './app-routing.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstcomComponent,
    SecondcompComponent,
    AssignmentCompComponent,
    DataBindingCompComponent,
    PipeCompComponent,
    PowerPipe,
    GenPipe,
    StudentComponent,
    StudentDetailsComponent,
    StudentRegistrationComponent,
    AboutComponent,
    ContactComponent,
    RoutingCompComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
