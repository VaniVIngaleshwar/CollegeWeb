import { Component } from '@angular/core';
import { AdmissionApiService } from 'admission-api.service';
import { admissionModel } from '../admission/admissionmodel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admission-record',
  templateUrl: './admission-record.component.html',
  styleUrls: ['./admission-record.component.css']
})
export class AdmissionRecordComponent {

  admform!: FormGroup;
  admdata: undefined | admissionModel[];

  constructor(private formbuilder: FormBuilder, private admapi: AdmissionApiService) { }

  ngOnInit(): void {
    this.admform = this.formbuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      date: ['', Validators.required],
      mom: ['', Validators.required],
      dad: ['', Validators.required],
      contact: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['', Validators.required],
      course:['', Validators.required]
    })
    this.getStudent();
  }

  deleteStudent( admdata: any) {
    this.admapi.deleteStudent( admdata.id).subscribe(res => {
      this.getStudent();
    })
    alert("delete student");
  }

  getStudent() {
    this.admapi.getStudent().subscribe(res => {
      this. admdata = res;
    })
  }  
}
