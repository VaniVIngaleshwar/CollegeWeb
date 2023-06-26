import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TimetableComponent } from './timetable/timetable.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AttendanceRecordComponent } from './attendance-record/attendance-record.component';
import { FirstyearComponent } from './firstyear/firstyear.component';
import { SecondyearComponent } from './secondyear/secondyear.component';
import { AdmissionComponent } from 'admission/admission.component';
import { AdmissionRecordComponent } from 'admission-record/admission-record.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'timetable', component:TimetableComponent},
  {path:'attendance',component:AttendanceComponent},
  {path:'attendance-record',component:AttendanceRecordComponent},
  {path:'firstyear', component:FirstyearComponent},
  {path:'secondyear', component:SecondyearComponent},
  {path:'admission', component:AdmissionComponent},
  {path:'admissionrecord', component:AdmissionRecordComponent},
  // keep this below line at last only dont disturb it ur remainig path u can attach above ok
  {path:'', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
