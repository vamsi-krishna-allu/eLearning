import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  basicFeatures : Array<any> = [];
  standardFeatures : Array<any> = [];
  premeiumFeatures : Array<any> = [];
  
  basicPlan : boolean = true;
  standardPlan : boolean = true;
  premeiumPlan : boolean = true;


  constructor() { }

  ngOnInit(): void {
    this.basicFeatures = ['Basic Feature Name1','Basic Feature Name2'];
    this.standardFeatures = ['Standard Feature Name1', 'Standard Feature Name2', 'Standard Feature Name3'];
    this.premeiumFeatures = ['Premium Feature Name1', 'Premium Feature Name2', 'Premium Feature Name3', 'Premium Feature Name4'];
  }
  payNow() {

  }

}
