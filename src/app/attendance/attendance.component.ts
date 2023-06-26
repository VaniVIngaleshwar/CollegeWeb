import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AttendanceService } from '../attendance.service';
// import { attendanceModel } from './attendance model';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent {
  // attform!: FormGroup;
  // attdata: undefined | attendanceModel[];

  // constructor(private formbuilder: FormBuilder, private attapi:AttendanceService) { }

  // ngOnInit(): void {
  //   this.attform = this.formbuilder.group({
  //     name: ['', Validators.required],
  //     // date: ['', Validators.required],
  //     status:['',Validators.required],
  //     rollno:['',Validators.required],
  //     course:['', Validators.required]
  //   })
  //   this.getRec();
  // }

  // // get date() {
  // //   return this.attform.get('date');
  // // }

  // get name() {
  //   return this.attform.get('name');
  // }
  // get status() {
  //   return this.attform.get('status');
  // }
  // get rollno() {
  //   return this.attform.get('rollno');
  // }
  // get course() {
  //   return this.attform.get('course');
  // }
  // addRec( attdata:  attendanceModel) {
  //   this.attapi.addRec( attdata).subscribe((res => {
  //     this.attform.reset();
  //   }))
  //   this.getRec();
  //   alert("added to Records");
  // }

  // getRec() {
  //   this.attapi.getRec().subscribe(res => {
  //     this. attdata = res;
  //   })
  // }

  // deleteRec( attdata: any) {
  //   this.attapi.deleteRec( attdata.id).subscribe(res => {
  //     this.getRec();
  //   })
  //   alert("delete records");
  // }

  // searchStudent(event: any) {
  //   if (event.target.value) {
  //     this.admapi.searchStudent(event.target.value).subscribe(res => {
  //       this. admdata = res;
  //     })
  //   } else {
  //     this.getStudent();
  //   }
  // }

}