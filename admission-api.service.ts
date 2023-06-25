import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { admissionModel } from 'src/app/admission/admissionmodel';

@Injectable({
  providedIn: 'root'
})
export class AdmissionApiService {

  baseurl: string = "http://localhost:3000/admission/";

  constructor(private http: HttpClient) { }

  addStudent(admdata: admissionModel) {
    return this.http.post<admissionModel>(this.baseurl, admdata)
  }

  getStudent() {
    return this.http.get<admissionModel[]>(this.baseurl);
  }

  deleteStudent(id: number) {
    return this.http.delete<admissionModel>(this.baseurl + id);
  }

  updateStudent(admdata: admissionModel, id: number) {
    return this.http.put<admissionModel>(this.baseurl + id, admdata);
  }

  fetchData(id: number) {
    return this.http.get<admissionModel>(this.baseurl + id);
  }
}

