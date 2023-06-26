//import { Component } from '@angular/core';

import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent {

    
    faculties: any[] = [
      {
        name: 'Aravind J',
        subject: 'Physics',
        email: 'jaravind@gmail.com',
        phone: '9934567890'
      },
      {
        name: 'Sidhram S Patil',
        subject: 'Chemistry',
        email: 'sspatil@gmail.com',
        phone: '9876533210'
      },
      {
        name: 'Veena Patil',
        subject: 'Maths',
        email: 'patilveena@rediffmail.com',
        phone: '9567891230'
      },
      {
        name: 'Dakshayni Ijeri',
        subject: 'Biology',
        email: 'DIjeri@gmail.com',
        phone: '9891234560'
      },
      {
        name: 'Prabhu Bevinamard',
        subject: 'Computer Science',
        email: 'bevprabhu34@gmail.com',
        phone: '9216549870'
      },
    ];
  
    subjects: string[] = ['Physics', 'Chemistry', 'Maths', 'Biology', 'Computer Science'];
  
    constructor() { }
  
    ngOnInit() {
    }
  
    getFacultiesBySubject(subject: string): any[] {
      return this.faculties.filter(faculty => faculty.subject === subject);
    }

}
