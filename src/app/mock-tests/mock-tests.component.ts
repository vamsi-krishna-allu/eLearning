import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { Subject } from "rxjs";

@Component({
  selector: 'app-mock-tests',
  templateUrl: './mock-tests.component.html',
  styleUrls: ['./mock-tests.component.css']
})
export class MockTestsComponent implements OnInit {

  constructor(private connectionService: ConnectionService) { }

  testSubject = new Subject();
  mockQuestionData: {
    question: string;
    options: string[],
    testType: string;
  } = { question: "", options: ["","","",""], testType: "" };
  mockQuestions: {
    question: string;
    options: string[],
    testType: string;
  }[] = [
    { question: "", options: ["","","",""], testType: "" }
    ];

  currentIndex = 0;
  maximumIndex = 0;
  userAnswers: any[] = [];
  progressBarValue = 0;

  ngOnInit(): void {
    this.testSubject.subscribe((value: any) => {
      this.mockQuestionData = value;
    });
    this.onTestSelection();
  }

  onTestSelection() {
    let testType = "MockTest1";
    this.mockQuestions = [];
    this.connectionService.getMockTest(testType).subscribe((response: Array<any>) => {
      if (response) {
        response.forEach(mockQuestion => {
          this.mockQuestions.push(
            {
              question: mockQuestion?.question,
              options: [ mockQuestion?.optionsA,  mockQuestion?.optionsB,  mockQuestion?.optionsC,  mockQuestion?.optionsD],
              testType: mockQuestion?.testType,
            }
          );
        });
        this.testSubject.next(this.mockQuestions[0]);
        this.maximumIndex = this.mockQuestions.length;
      }
    });
  }

  onNext() {
    this.userAnswers[this.currentIndex] = "first";
    this.currentIndex += 1;
    this.testSubject.next(this.mockQuestions[this.currentIndex]);
    console.log(this.userAnswers);
    this.progressBarValue = this.userAnswers.length * (100 / this.mockQuestions.length);
  }

  onPrevious() {
    if(this.currentIndex!==0){
      this.currentIndex -=1;
      this.testSubject.next(this.mockQuestions[this.currentIndex]);
    }
  }

  onSubmit() {
    console.log("submitted");
  }

}

