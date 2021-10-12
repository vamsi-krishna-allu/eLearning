import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-result',
  templateUrl: './test-result.component.html',
  styleUrls: ['./test-result.component.css']
})
export class TestResultComponent implements OnInit {

marks_scored : number = 0;
total_marks : number = 60;

attempted_questions : number = 0;
total_questions : number = 60;

percentage : string = '';

time_taken : string = '';
total_time : string = '30min';

start_time : string = '';
end_time : string = '';

public canvasWidth = 600;
public needleValue = 65;
public centralLabel = '';
public name ='';
public bottomLabel = '';
public options = {
    hasNeedle: true,
    needleColor: 'gray',
    needleUpdateSpeed: 1000,
    arcColors: ['red','lightgrey','lightblue', 'lightgreen'],
    arcDelimiters: [25,50,75],
    rangeLabel: ['0','100'],
    needleStartValue: 50,
}


  constructor() { }

  ngOnInit(): void {
    this.marks_scored = 38;
    this.percentage = ((this.marks_scored/this.total_marks) * 100).toFixed(2)+'%';
    this.bottomLabel = this.percentage;
    this.attempted_questions = 55;
    this.time_taken = '28min';
    let date = new Date();
    this.start_time = date.toString().substring(0,24);
  }

}
