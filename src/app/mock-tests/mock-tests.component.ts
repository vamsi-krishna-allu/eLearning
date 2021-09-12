import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mock-tests',
  templateUrl: './mock-tests.component.html',
  styleUrls: ['./mock-tests.component.css']
})
export class MockTestsComponent implements OnInit {

  constructor() { }
  options = [
    'option1',
    'option2',
    'option3',
    'option4'
  ]
  ngOnInit(): void {
  }

}
