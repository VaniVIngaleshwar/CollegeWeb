import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { AttendanceService } from '../attendance.service';
import { firstyearmodel } from './firstyeardata/firstyearmodel';

@Component({
  selector: 'app-firstyear',
  templateUrl: './firstyear.component.html',
  styleUrls: ['./firstyear.component.css']
})
export class FirstyearComponent {

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

  onSave(data: firstyearmodel){
    this.api.postFirstYearData(data).subscribe(res => {
      this.attendanceform.reset();
    })
  }

  onSearch() {
    this.api.getFirstYearDataByDateAndCourse(this.searchDate, this.searchCourse).subscribe(res => {
      this.searchResults = res;
      this.showTable = true;
    });
  }

  onBack() {
    this.showTable = false;
    // Add any additional actions needed when going back from the search results
  }


}
