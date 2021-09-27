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

  constructor(private connectionService : ConnectionService, private route: Router) { }

  ngOnInit(): void {
    
  }
  payNow(planPrice : any) {
    this.connectionService.payNow(planPrice).subscribe(resp =>{
      if(resp === 'success') {
        this.route.navigateByUrl('/paymentSuccess');
      }
      else {
        this.route.navigateByUrl('/paymentFail');
      }
    });

  }

}
