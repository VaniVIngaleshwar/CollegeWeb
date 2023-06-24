import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AttendanceService } from '../attendance.service';
import { attendanceModel } from '../attendance/attendance model';


@Component({
  selector: 'app-attendance-record',
  templateUrl: './attendance-record.component.html',
  styleUrls: ['./attendance-record.component.css']
})
export class AttendanceRecordComponent {

  attform!: FormGroup;
  attdata: undefined | attendanceModel[];

  constructor(private formbuilder: FormBuilder, private attapi: AttendanceService) { }

  ngOnInit(): void {
    this.attform = this.formbuilder.group({
      name: ['', Validators.required],
      // date: ['', Validators.required],
      status:['',Validators.required],
      rollno:['',Validators.required],
      course:['', Validators.required]
    })
    this.getRec();
  }


  deleteRec( attdata: any) {
    this.attapi.deleteRec( attdata.id).subscribe(res => {
      this.getRec();
    })
    alert("delete record");
  }

  getRec() {
    this.attapi.getRec().subscribe(res => {
      this. attdata = res;
    })
  }  
}
