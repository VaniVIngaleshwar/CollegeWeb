import { Component } from '@angular/core';
import { admissionModel } from './admissionmodel';
import { AdmissionApiService } from 'src/services/admission-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent {

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

  get date() {
    return this.admform.get('date');
  }

  get fname() {
    return this.admform.get('name');
  }

  get lname() {
    return this.admform.get('name');
  }

  get mom() {
    return this.admform.get('mom');
  }

  get dad() {
    return this.admform.get('dad');
  }

  get contact() {
    return this.admform.get('contact');
  }

  get address() {
    return this.admform.get('address');
  }

  get gender() {
    return this.admform.get('gender');
  }

  addStudent( admdata:  admissionModel) {
    this.admapi.addStudent( admdata).subscribe((res => {
      this.admform.reset();
    }))
    this.getStudent();
    alert("add to student list");
  }

  getStudent() {
    this.admapi.getStudent().subscribe(res => {
      this. admdata = res;
    })
  }

  deleteStudent( admdata: any) {
    this.admapi.deleteStudent( admdata.id).subscribe(res => {
      this.getStudent();
    })
    alert("delete student");
  }
}
