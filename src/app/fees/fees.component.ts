import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentModel } from '../fees.model';
import { ApiserviceService } from 'src/services/apiservice.service';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})
export class FeesComponent implements OnInit {

  formValue !: FormGroup;
  studentModelObj: StudentModel = new StudentModel();
  studentData !: any;
  constructor(private formbuilder: FormBuilder, private api: ApiserviceService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      studentId: [''],
      studentName: [''],
      course: [''],
      studentYear: [''],
      feesApplicable: [''],
      feesPaid: [''],
      feesPending: ['']
    })
    this.getStudentDetails();
  }

  posttudentDetails() {
    this.studentModelObj.stuId = this.formValue.value.studentId;
    this.studentModelObj.stuName = this.formValue.value.studentName;
    this.studentModelObj.course = this.formValue.value.course;
    this.studentModelObj.stuYear = this.formValue.value.studentYear;
    this.studentModelObj.feesApp = this.formValue.value.feesApplicable;
    this.studentModelObj.feesPaid = this.formValue.value.feesPaid;
    this.studentModelObj.pendFees = this.formValue.value.feesPending;

    this.api.postStudent(this.studentModelObj).subscribe(res => {
      console.log(res);
      alert("Student Fees Added Successfully");
      this.formValue.reset();
      this.getStudentDetails();
    })
  }

  getStudentDetails() {
    this.api.getStudent().subscribe(res => {
      this.studentData = res;
    })
  }

  deleteStudentDetails(raw: any) {
    this.api.deleteStudent(raw.id).subscribe(res => {
      alert("Student Deleted");
      this.getStudentDetails();
    })
  }

  onEdit(raw: any) {
    this.studentModelObj.id = raw.id;
    this.formValue.controls['studentId'].setValue(raw.stuId);
    this.formValue.controls['studentName'].setValue(raw.stuName);
    this.formValue.controls['course'].setValue(raw.course);
    this.formValue.controls['studentYear'].setValue(raw.stuYear);
    this.formValue.controls['feesApplicable'].setValue(raw.feesApp);
    this.formValue.controls['feesPaid'].setValue(raw.feesPaid);
    this.formValue.controls['feesPending'].setValue(raw.pendFees);
  }

  updateStudentDetails() {
    this.studentModelObj.stuId = this.formValue.value.studentId;
    this.studentModelObj.stuName = this.formValue.value.studentName;
    this.studentModelObj.course = this.formValue.value.course;
    this.studentModelObj.stuYear = this.formValue.value.studentYear;
    this.studentModelObj.feesApp = this.formValue.value.feesApplicable;
    this.studentModelObj.feesPaid = this.formValue.value.feesPaid;
    this.studentModelObj.pendFees = this.formValue.value.feesPending;

    this.api.updateStudent(this.studentModelObj, this.studentModelObj.id).subscribe(res => {
      alert("Updated Successfully");
      this.formValue.reset();
      this.getStudentDetails();
    })
  }

}
