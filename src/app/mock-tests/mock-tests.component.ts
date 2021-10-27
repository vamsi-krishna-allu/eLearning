import { Component, OnInit, ViewChild } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { Subject } from "rxjs";
import { Router } from '@angular/router';
import { LocalstorageService } from '../localstorage.service';
import { AutoRefreshComponent } from '../auto-refresh/auto-refresh.component';

@Component({
  selector: 'app-mock-tests',
  templateUrl: './mock-tests.component.html',
  styleUrls: ['./mock-tests.component.css']
})
export class MockTestsComponent implements OnInit {

  constructor(private connectionService: ConnectionService, private route: Router, private localStorageService: LocalstorageService) { }

  testSubject = new Subject();
  selectedOption: string = '';
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
  userAnswers: any[] = Array(75).fill(-1);
  progressBarValue = 0;
  currentAnswer = 5;
  @ViewChild(AutoRefreshComponent)
  autoRefresh!: AutoRefreshComponent;
  end_time: string = '';

  ngOnInit(): void {
    this.testSubject.subscribe((value: any) => {
      this.mockQuestionData = value;
    });
    this.onTestSelection(history.state.data);
  }

  onTestSelection(testType: string) {
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

  onNext(selectedOption: any) {
    this.userAnswers[this.currentIndex] = selectedOption;
    this.currentIndex += 1;
    this.testSubject.next(this.mockQuestions[this.currentIndex]);
    this.progressBarValue = this.userAnswers.length * (100 / this.mockQuestions.length);
    this.currentAnswer = this.userAnswers[this.currentIndex];
  }

  onPrevious() {
    if(this.currentIndex!==0){
      this.currentIndex -=1;
      this.testSubject.next(this.mockQuestions[this.currentIndex]);
      this.currentAnswer = this.userAnswers[this.currentIndex];
    }
  }

  onSubmit(selectedOption: any) {
    this.userAnswers[this.currentIndex] = selectedOption;
    let date = new Date();
    this.end_time = date.toString().substring(0,24);
    let answers = {
      username: this.localStorageService.get("USERNAME"),
      testName: history.state.data,
      answer: this.userAnswers,
      timeTaken: 120-this.autoRefresh.minutes
    }
    
    this.connectionService.evaluate(answers).subscribe((res: any) => {
      this.route.navigateByUrl('/result', {state: {data: res}});
    }) 
  }
}

