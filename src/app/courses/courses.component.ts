import { Component, Input, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  @Input() selectedCourse : string = '';
  realestateCourses = REALESTATE_COURSES;
  mortgageCourses = MORTGAGE_COURSES;
  constructor(private connectionService : ConnectionService) { }

  ngOnInit(): void {
    this.connectionService.getPdfFile('Aadharfront').subscribe(response => {
      console.log('response');
    });
  }

}
export interface Courses {
  courseName : string;
  courseDesc : string;
}

const REALESTATE_COURSES : Courses[] = [
  {courseName: 'REAL ESTATE ESSENTIALS', courseDesc: ''},
  {courseName: 'RESIDENTIAL REAL ESTATE TRANSACTIONS', courseDesc: ''},
  {courseName: 'ADDITIONAL RESIDENTIAL REAL ESTATE TRANSACTIONS', courseDesc: ''},
  {courseName: 'SIMULATION FOR RESIDENTIAL REAL ESTAE TRANSACTION', courseDesc: ''},
  {courseName: 'COMMERCIAL REAL ESTATE TRANSACTIONS', courseDesc: ''},
  {courseName: 'SIMULATION FOR COMMERCIAL REAL ESTATE TRANSACTIONS', courseDesc: ''},
  {courseName: 'BROKER QUALIFYING EXAM', courseDesc: ''},
  {courseName: 'BROKER EXAM', courseDesc: ''},
];
const MORTGAGE_COURSES : Courses[] = [
  {courseName: 'MORTGAGE EXAM', courseDesc: ''},
];

