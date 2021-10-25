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
      test:[{
        id: 'test-1',
        status: 'unavailable',
        name:'MOCK TEST 1'
      },
      {
        id: 'test-2',
        status: 'unavailable',
        name:'MOCK TEST 2'
      },{
        id: 'test-3',
        status: 'unavailable',
        name:'MOCK TEST 3'
      },{
        id: 'test-4',
        status: 'unavailable',
        name:'MOCK TEST 4'
      }]
    },
    {
      courseId: 'residential-real-estate-transactions',
      courseName: 'RESIDENTIAL REAL ESTATE TRANSACTIONS',
      isCourseAllowed: false,
      test:[{
        id: 'test-1',
        status: 'unavailable',
        name:'MOCK TEST 1'
      },
      {
        id: 'test-2',
        status: 'unavailable',
        name:'MOCK TEST 2'
      },{
        id: 'test-3',
        status: 'unavailable',
        name:'MOCK TEST 3'
      },{
        id: 'test-4',
        status: 'unavailable',
        name:'MOCK TEST 4'
      }]
    },
    {
      courseId: 'additional-residential-real-estate-transactions',
      courseName: 'ADDITIONAL RESIDENTIAL REAL ESTATE TRANSACTIONS',
      isCourseAllowed: false,
      test:[{
        id: 'test-1',
        status: 'unavailable',
        name:'MOCK TEST 1'
      },
      {
        id: 'test-2',
        status: 'unavailable',
        name:'MOCK TEST 2'
      },{
        id: 'test-3',
        status: 'unavailable',
        name:'MOCK TEST 3'
      },{
        id: 'test-4',
        status: 'unavailable',
        name:'MOCK TEST 4'
      }]
    },
    {
      courseId: 'simulation-residential-real-estate-transactions',
      courseName: 'SIMULATION FOR RESIDENTIAL REAL ESTAE TRANSACTION',
      isCourseAllowed: false,
      test:[{
        id: 'test-1',
        status: 'unavailable',
        name:'MOCK TEST 1'
      },
      {
        id: 'test-2',
        status: 'unavailable',
        name:'MOCK TEST 2'
      },{
        id: 'test-3',
        status: 'unavailable',
        name:'MOCK TEST 3'
      },{
        id: 'test-4',
        status: 'unavailable',
        name:'MOCK TEST 4'
      }]
    },
    {
      courseId: 'commercial-real-estate-transactions',
      courseName: 'COMMERCIAL REAL ESTATE TRANSACTIONS',
      isCourseAllowed: false,
      test:[{
        id: 'test-1',
        status: 'unavailable',
        name:'MOCK TEST 1'
      },
      {
        id: 'test-2',
        status: 'unavailable',
        name:'MOCK TEST 2'
      },{
        id: 'test-3',
        status: 'unavailable',
        name:'MOCK TEST 3'
      },{
        id: 'test-4',
        status: 'unavailable',
        name:'MOCK TEST 4'
      }]
    },
    {
      courseId: 'simulation-commercial-real-estate-transactions',
      courseName: 'SIMULATION FOR COMMERCIAL REAL ESTATE TRANSACTIONS',
      courseDesc: 'The prices of real-estate market influence the welfare of citizens and the business of real-estate investors. A well-known open challenge is to understand the repercussions of different combinations of individual buying/selling strategies on this market. The current approach is aimed at simulating these repercussions. For this purpose, a novel agent-based simulation tool includes common known strategies. This tool simulates the real-estate transactions from these strategies, showing the evolution of average prices and the results of each strategy (i.e. their success ratio, average price of their transactions and average waiting time). The underlying framework is extensible so that users can easily define and simulate new strategies. The experimentation of this work includes micro-validation of each kind of strategy',
      isCourseAllowed: false,
      test:[{
        id: 'test-1',
        status: 'unavailable',
        name:'MOCK TEST 1'
      },
      {
        id: 'test-2',
        status: 'unavailable',
        name:'MOCK TEST 2'
      },{
        id: 'test-3',
        status: 'unavailable',
        name:'MOCK TEST 3'
      },{
        id: 'test-4',
        status: 'unavailable',
        name:'MOCK TEST 4'
      }]
    },
    {
      courseId: 'broker-qualifying-exam',
      courseName: 'BROKER QUALIFYING EXAM',
      isCourseAllowed: false,
      test:[{
        id: 'test-1',
        status: 'unavailable',
        name:'MOCK TEST 1'
      },
      {
        id: 'test-2',
        status: 'unavailable',
        name:'MOCK TEST 2'
      },{
        id: 'test-3',
        status: 'unavailable',
        name:'MOCK TEST 3'
      },{
        id: 'test-4',
        status: 'unavailable',
        name:'MOCK TEST 4'
      }]
    },
    {
      courseId: 'broker-exam',
      courseName: 'BROKER EXAM',
      isCourseAllowed: false,
      test:[{
        id: 'test-1',
        status: 'unavailable',
        name:'MOCK TEST 1'
      },
      {
        id: 'test-2',
        status: 'unavailable',
        name:'MOCK TEST 2'
      },{
        id: 'test-3',
        status: 'unavailable',
        name:'MOCK TEST 3'
      },{
        id: 'test-4',
        status: 'unavailable',
        name:'MOCK TEST 4'
      }]
    },
    {
      courseId: 'mortage-exam',
      courseName: 'MORTGAGE EXAM',
      isCourseAllowed: false,
      test:[{
        id: 'test-1',
        status: 'unavailable',
        name:'MOCK TEST 1'
      },
      {
        id: 'test-2',
        status: 'unavailable',
        name:'MOCK TEST 2'
      },{
        id: 'test-3',
        status: 'unavailable',
        name:'MOCK TEST 3'
      },{
        id: 'test-4',
        status: 'unavailable',
        name:'MOCK TEST 4'
      }]
    },
  ];

  constructor(private localStorageService: LocalstorageService, private route: Router, private connectionService: ConnectionService,
    private dialog: MatDialog) { }
  
  ngOnInit(): void {
    if(this.localStorageService.get('TOKEN')) {
      this.connectionService.getAvailableMockTests().subscribe((response: any) => {
        let availablemockTests = response.availableMockTests;
        let mockTestListCourseId = [];
        if(availablemockTests && availablemockTests.length > 0){
          for(let availableTest of availablemockTests) {
            mockTestListCourseId.push(availableTest.substring(0, availableTest.length - 7));
          }
  
          for(let mockTest of this.mockTests) {
            let index = 0;
            for(let courseId of mockTestListCourseId) {
              if(mockTest.courseId === courseId) {
                let selectedTest = availablemockTests[index];
                let testNumber = selectedTest.substring(selectedTest.length-1);
                mockTest.test[testNumber-1].status = 'available';
                index++;
              }
            }
            /*let testIndex = mockTestListCourseId.indexOf(mockTest.courseId);
            if( testIndex !== -1) {
              let selectedTest = availablemockTests[testIndex];
              let testNumber = selectedTest.substring(selectedTest.length-1);
              mockTest.test[testNumber-1].status = 'available';
            }*/
          }
        }
        
        let submitmockTests = response.submittedMockTests;
        let submitTestListCourseId = [];

        if(submitmockTests && submitmockTests.length > 0) {
          for(let availableTest of submitmockTests) {
            submitTestListCourseId.push(availableTest.substring(0, availableTest.length - 7));
          }
  
          for(let mockTest of this.mockTests) {
            let index = 0;
            for(let courseId of submitTestListCourseId) {
              if(mockTest.courseId === courseId) {
                let selectedTest = submitmockTests[index];
                let testNumber = selectedTest.substring(selectedTest.length-1);
                mockTest.test[testNumber-1].status = 'submitted';
                index++;
              }
            }
            /*let testIndex = submitTestListCourseId.indexOf(mockTest.courseId);
            if( testIndex !== -1) {
              let selectedTest = submitmockTests[testIndex];
              let testNumber = selectedTest.substring(selectedTest.length-1);
              mockTest.test[testNumber-1].status = 'submitted';
            }*/
          }
        }
      });
    }
  }

  subscribeNow(course: any, courseid: any) {
    let planData = {courseId: courseid, courseName: course, type: 'course', planDetails: [{planType : 'basic', color:'red',   planPrice  : '$100', features : [`Any 1 mock test of ${course} available`,'Validity of the test - 30 days']},
                        {planType : 'standard', color: 'green', planPrice  : '$150', features : [`Any 2 mock tests of ${course} available`,'Validity of the test - 45 days']},
                        {planType : 'premium', color: 'blue', planPrice  : '$250', features : [`All 4 mock tests of ${course} available`,'Validity of the test - 60 days']}               
    ]};
    this.route.navigateByUrl('/subscribe', { state: { data: planData } });
  }

  startTest(course: any) {
    this.testEnable = false;
    const dialogRef = this.dialog.open(TestInstructionsComponent, {
      data: course
    });

    dialogRef.afterClosed().subscribe(result => {
      this.testEnable = true;
      console.log(`Dialog result: ${result}`);
    });
  }

  mockTest(courseName:string, testName:string, testStatus: string) {
    let testId = `${courseName}-${testName}`;
    if(testStatus === 'submitted') {
      this.connectionService.viewTestResult(testId).subscribe((response: any) => {
        this.route.navigateByUrl('/result',{state: {data: response}});
        let availablemockTests = response.availableMockTests;
        for(let mockTest of this.mockTests) {
          let testIndex = availablemockTests.indexOf(mockTest.courseId);
          if( testIndex !== -1) {
            mockTest.isCourseAllowed = true;
          }
        }
      });
    }
    else if(testStatus === 'available') {
      this.startTest(testId);
    }
  }

}
