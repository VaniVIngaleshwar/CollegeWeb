import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TimetableComponent } from './timetable/timetable.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { FeesComponent } from './fees/fees.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'timetable', component:TimetableComponent},
  // keep this below line at last only dont disturb it ur remainig path u can attach above ok
  
  {path:'coursedetails', component:CoursedetailsComponent},
  {path:'fees', component:FeesComponent},
  {path:'', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
