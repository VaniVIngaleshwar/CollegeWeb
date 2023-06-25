import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { attendanceModel } from './attendance/attendance model';


@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  baseurl: string = "http://localhost:3000/attendance/";

  constructor(private http: HttpClient) { }

  addRec(attdata: attendanceModel) {
    return this.http.post<attendanceModel>(this.baseurl, attdata)
  }

  getRec() {
    return this.http.get<attendanceModel[]>(this.baseurl);
  }

  deleteRec(id: number) {
    return this.http.delete<attendanceModel>(this.baseurl + id);
  }

  updateRec(attdata: attendanceModel, id: number) {
    return this.http.put<attendanceModel>(this.baseurl + id, attdata);
  }

  fetchData(id: number) {
    return this.http.get<attendanceModel>(this.baseurl + id);
  }

 
}