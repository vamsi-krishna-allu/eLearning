import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from 'src/app/connection.service';
import { LocalstorageService } from 'src/app/localstorage.service';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {

  panelOpenState = false;

  mockTests = [
    {
      courseId: 'real-estate-essentials',
      courseName: 'REAL ESTATE ESSENTIALS',
      isCourseAllowed: true
    },
    {
      courseId: 'residential-real-estate-transactions',
      courseName: 'RESIDENTIAL REAL ESTATE TRANSACTIONS',
      isCourseAllowed: false
    },
    {
      courseId: 'additional-residential-real-estate-transactions',
      courseName: 'ADDITIONAL RESIDENTIAL REAL ESTATE TRANSACTIONS',
      isCourseAllowed: false
    },
    {
      courseId: 'simulation-residential-real-estate-transactions',
      courseName: 'SIMULATION FOR RESIDENTIAL REAL ESTAE TRANSACTION',
      isCourseAllowed: false
    },
    {
      courseId: 'commercial-real-estate-transactions',
      courseName: 'COMMERCIAL REAL ESTATE TRANSACTIONS',
      isCourseAllowed: false
    },
    {
      courseId: 'simulation-commercial-real-estate-transactions',
      courseName: 'SIMULATION FOR COMMERCIAL REAL ESTATE TRANSACTIONS',
      courseDesc: 'The prices of real-estate market influence the welfare of citizens and the business of real-estate investors. A well-known open challenge is to understand the repercussions of different combinations of individual buying/selling strategies on this market. The current approach is aimed at simulating these repercussions. For this purpose, a novel agent-based simulation tool includes common known strategies. This tool simulates the real-estate transactions from these strategies, showing the evolution of average prices and the results of each strategy (i.e. their success ratio, average price of their transactions and average waiting time). The underlying framework is extensible so that users can easily define and simulate new strategies. The experimentation of this work includes micro-validation of each kind of strategy',
      isCourseAllowed: false
    },
    {
      courseId: 'broker-qualifying-exam',
      courseName: 'BROKER QUALIFYING EXAM',
      isCourseAllowed: false
    },
    {
      courseId: 'broker-exam',
      courseName: 'BROKER EXAM',
      isCourseAllowed: false
    },
    {
      courseId: 'mortage-exam',
      courseName: 'MORTGAGE EXAM',
      isCourseAllowed: false
    },
  ];

  constructor(private localStorageService: LocalstorageService, private route: Router, private connectionService: ConnectionService) { }
  
  ngOnInit(): void {
    if(this.localStorageService.get('TOKEN')) {
      this.connectionService.getAvailableMockTests().subscribe((response: any) => {
        let availablemockTests = response.availableMockTests;
        for(let mockTest of this.mockTests) {
          let testIndex = availablemockTests.indexOf(mockTest.courseId);
          if( testIndex !== -1) {
            mockTest.isCourseAllowed = true;
          }
        }
      });
    }
  }

  subscribeNow(course: any) {
    this.route.navigateByUrl('/subscribe');
  }

  startTest(course: any) {
    this.route.navigateByUrl('/openTest');
  }

}
