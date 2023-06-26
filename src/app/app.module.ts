import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TimetableComponent } from './timetable/timetable.component';
import { FooterComponent } from './footer/footer.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { FeesComponent } from './fees/fees.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AttendanceRecordComponent } from './attendance-record/attendance-record.component';
import { FirstyearComponent } from './firstyear/firstyear.component';
import { SecondyearComponent } from './secondyear/secondyear.component';
import { AdmissionComponent } from 'admission/admission.component';
import { AttendanceComponent } from './attendance/attendance.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TimetableComponent,
    FooterComponent,
    CourseDetailsComponent,
    FeesComponent,
    CoursedetailsComponent,
    AttendanceComponent,
    AttendanceRecordComponent,
    FirstyearComponent,
    SecondyearComponent,
    AdmissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
