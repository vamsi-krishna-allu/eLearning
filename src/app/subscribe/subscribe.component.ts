import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  basicFeatures : Array<any> = [];
  standardFeatures : Array<any> = [];
  premeiumFeatures : Array<any> = [];

  @Input() planDetails : any;
  @Input() courseName : any;
  @Input() type: any;

  constructor(private connectionService : ConnectionService, private route: Router) { }

  ngOnInit(): void {
  }

  payNow(plan : string) {
    this.connectionService.payNow(plan, this.courseName, this.type).subscribe(resp =>{
      this.route.navigateByUrl('/home');
    });
  }

}
