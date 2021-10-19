import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-instructions',
  templateUrl: './test-instructions.component.html',
  styleUrls: ['./test-instructions.component.css']
})
export class TestInstructionsComponent implements OnInit {

  checked : boolean = false;
  indeterminate : boolean = false;

  constructor(private route : Router) { }

  ngOnInit(): void {
  }
  startTest() {
    this.route.navigateByUrl('/openTest');
  }

}
