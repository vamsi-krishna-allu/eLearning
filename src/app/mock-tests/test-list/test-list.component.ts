import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConnectionService } from 'src/app/connection.service';
import { LocalstorageService } from 'src/app/localstorage.service';
import { TestInstructionsComponent } from 'src/app/test-instructions/test-instructions.component';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {

  panelOpenState = false;
  testEnable = true;

  mockTests = [
    {
      courseId: 'real-estate-essentials',
      courseName: 'REAL ESTATE ESSENTIALS',
      isCourseAllowed: true,
      test1:['testid','teststatus'],
      test2:['testid','teststatus'],
      test3:['testid','teststatus'],
      test4:['testid','teststatus']
    },
    {
      courseId: 'residential-real-estate-transactions',
      courseName: 'RESIDENTIAL REAL ESTATE TRANSACTIONS',
      isCourseAllowed: false,
      test1:['testid','teststatus'],
      test2:['testid','teststatus'],
      test3:['testid','teststatus'],
      test4:['testid','teststatus']
    },
    {
      courseId: 'additional-residential-real-estate-transactions',
      courseName: 'ADDITIONAL RESIDENTIAL REAL ESTATE TRANSACTIONS',
      isCourseAllowed: false,
      test1:['testid','teststatus'],
      test2:['testid','teststatus'],
      test3:['testid','teststatus'],
      test4:['testid','teststatus']
    },
    {
      courseId: 'simulation-residential-real-estate-transactions',
      courseName: 'SIMULATION FOR RESIDENTIAL REAL ESTAE TRANSACTION',
      isCourseAllowed: false,
      test1:['testid','teststatus'],
      test2:['testid','teststatus'],
      test3:['testid','teststatus'],
      test4:['testid','teststatus']
    },
    {
      courseId: 'commercial-real-estate-transactions',
      courseName: 'COMMERCIAL REAL ESTATE TRANSACTIONS',
      isCourseAllowed: false,
      test1:['testid','teststatus'],
      test2:['testid','teststatus'],
      test3:['testid','teststatus'],
      test4:['testid','teststatus']
    },
    {
      courseId: 'simulation-commercial-real-estate-transactions',
      courseName: 'SIMULATION FOR COMMERCIAL REAL ESTATE TRANSACTIONS',
      courseDesc: 'The prices of real-estate market influence the welfare of citizens and the business of real-estate investors. A well-known open challenge is to understand the repercussions of different combinations of individual buying/selling strategies on this market. The current approach is aimed at simulating these repercussions. For this purpose, a novel agent-based simulation tool includes common known strategies. This tool simulates the real-estate transactions from these strategies, showing the evolution of average prices and the results of each strategy (i.e. their success ratio, average price of their transactions and average waiting time). The underlying framework is extensible so that users can easily define and simulate new strategies. The experimentation of this work includes micro-validation of each kind of strategy',
      isCourseAllowed: false,
      test1:['testid','teststatus'],
      test2:['testid','teststatus'],
      test3:['testid','teststatus'],
      test4:['testid','teststatus']
    },
    {
      courseId: 'broker-qualifying-exam',
      courseName: 'BROKER QUALIFYING EXAM',
      isCourseAllowed: false,
      test1:['testid','teststatus'],
      test2:['testid','teststatus'],
      test3:['testid','teststatus'],
      test4:['testid','teststatus']
    },
    {
      courseId: 'broker-exam',
      courseName: 'BROKER EXAM',
      isCourseAllowed: false,
      test1:['testid','teststatus'],
      test2:['testid','teststatus'],
      test3:['testid','teststatus'],
      test4:['testid','teststatus']
    },
    {
      courseId: 'mortage-exam',
      courseName: 'MORTGAGE EXAM',
      isCourseAllowed: false,
      test1:['testid','teststatus'],
      test2:['testid','teststatus'],
      test3:['testid','teststatus'],
      test4:['testid','teststatus']
    },
  ];

  constructor(private localStorageService: LocalstorageService, private route: Router, private connectionService: ConnectionService,
    private dialog: MatDialog) { }
  
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
    let planData = {courseName: course, type: 'course', planDetails: [{planType : 'basic', color:'red',   planPrice  : '$100', features : [`Any 1 mock test of ${course} available`,'Validity of the test - 30 days']},
                        {planType : 'standard', color: 'green', planPrice  : '$150', features : [`Any 2 mock tests of ${course} available`,'Validity of the test - 45 days']},
                        {planType : 'premium', color: 'blue', planPrice  : '$250', features : [`All 4 mock tests of ${course} available`,'Validity of the test - 60 days']}               
    ]};
    this.route.navigateByUrl('/subscribe', { state: { data: planData } });
  }

  /*startTest(course: any) {
    this.route.navigateByUrl('/openTest', {state: {data: `${course}-test-1`}});
  }*/
  startTest(course: any) {
    this.testEnable = false;
    const dialogRef = this.dialog.open(TestInstructionsComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.testEnable = true;
      console.log(`Dialog result: ${result}`);
    });
  }

}
