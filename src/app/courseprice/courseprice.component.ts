import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courseprice',
  templateUrl: './courseprice.component.html',
  styleUrls: ['./courseprice.component.css']
})
export class CoursepriceComponent implements OnInit {
 
  planDetails : any;

  constructor() { }

  ngOnInit(): void {
    this.planDetails = [{planType : 'basic', color:'red',   planPrice  : '$150', features : ['Basic Feature Name1','Basic Feature Name2', 'Basic Feature Name3']},
                        {planType : 'standard', color: 'green', planPrice  : '$200', features : ['Standard Feature Name1', 'Standard Feature Name2', 'Standard Feature Name3']},
                        {planType : 'premium', color: 'blue', planPrice  : '$300', features : ['Premium Feature Name1', 'Premium Feature Name2', 'Premium Feature Name3']}               
                      ];
  }

}
