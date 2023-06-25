import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AttendanceService } from '../attendance.service';
import { firstyearmodel } from '../firstyear/firstyeardata/firstyearmodel';
import { secondyearmodel } from './secondyeardata/secondyearmodel';

@Component({
  selector: 'app-secondyear',
  templateUrl: './secondyear.component.html',
  styleUrls: ['./secondyear.component.css']
})
export class SecondyearComponent {

  attendanceform !: FormGroup;
  searchDate: string = '';
  searchCourse: string = '';
  searchResults: firstyearmodel[] = [];
  showTable: boolean = false;

  constructor(private formbuilder:FormBuilder, private api:AttendanceService){}

  ngOnInit(): void{
    this.attendanceform = this.formbuilder.group({
      rollno : ['', Validators.required],
      date : ['', Validators.required],
      course : ['', Validators.required],
      attendance : ['',Validators.required]
    })
  }

  onSave(data: secondyearmodel){
    this.api.postSecondYearData(data).subscribe(res => {
      this.attendanceform.reset();
    })
  }

  onSearch() {
    this.api.getSecondYearDataByDateAndCourse(this.searchDate, this.searchCourse).subscribe(res => {
      this.searchResults = res;
      this.showTable = true;
    });
  }

  onBack() {
    this.showTable = false;
    // Add any additional actions needed when going back from the search results
  }

}
