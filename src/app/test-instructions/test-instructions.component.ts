import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-instructions',
  templateUrl: './test-instructions.component.html',
  styleUrls: ['./test-instructions.component.css']
})
export class TestInstructionsComponent implements OnInit {

  checked : boolean = false;
  indeterminate : boolean = false;
  start_time : string = '';

  constructor(private route : Router, @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit(): void {
  }
  startTest() {
    let date = new Date();
    this.start_time = date.toString().substring(0,24);
    this.route.navigateByUrl('/openTest',{state: {data: this.data}});
  }

}
