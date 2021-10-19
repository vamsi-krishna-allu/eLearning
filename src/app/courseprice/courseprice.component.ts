import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courseprice',
  templateUrl: './courseprice.component.html',
  styleUrls: ['./courseprice.component.css']
})
export class CoursepriceComponent implements OnInit {
 
  planDetails : any;
  courseName : any;
  type: any;

  constructor(private route: Router) { 
  }

  ngOnInit(): void {
    this.planDetails = history.state.data.planDetails;
    this.courseName = history.state.data.courseName;
    this.type = history.state.data.type;
  }

}
