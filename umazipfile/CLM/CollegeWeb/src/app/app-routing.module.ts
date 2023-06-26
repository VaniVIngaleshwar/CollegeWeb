import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TimetableComponent } from './timetable/timetable.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'timetable', component:TimetableComponent},
  {path:'staff',component:StaffComponent},
  // keep this below line at last only dont disturb it ur remainig path u can attach above ok
  {path:'', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
