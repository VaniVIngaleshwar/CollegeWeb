import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { firstyearmodel } from './firstyear/firstyeardata/firstyearmodel';
import { secondyearmodel } from './secondyear/secondyeardata/secondyearmodel';


@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  firsturl: string = "http://localhost:3000/firstyearattendance/";
  secondurl: string = "http://localhost:3000/secondyearattendance/";
 
  constructor(private http: HttpClient) { }

  postFirstYearData(data: firstyearmodel){
    return this.http.post<firstyearmodel>(this.firsturl,data);
  }


  postSecondYearData(data : secondyearmodel){
    return this.http.post<secondyearmodel>(this.secondurl,data);
  }

  getFirstYearDataByDateAndCourse(date: string, course: string) {
    const params = { date: date, course: course };
    return this.http.get<firstyearmodel[]>(this.firsturl, { params: params });
  }

  getSecondYearDataByDateAndCourse(date: string, course: string) {
    const params = { date: date, course: course };
    return this.http.get<secondyearmodel[]>(this.secondurl, { params: params });
  }
 
}