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
    this.planDetails = [{planType : 'basic',    planPrice  : '$100', features : ['Basic Feature Name1','Basic Feature Name2']},
                        {planType : 'standard', planPrice  : '$200', features : ['Standard Feature Name1', 'Standard Feature Name2', 'Standard Feature Name3']}               
                      ];
  }

}
