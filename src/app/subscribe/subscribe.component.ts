import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { LocalstorageService } from '../localstorage.service';

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

  constructor(private connectionService : ConnectionService, private route: Router,
    private localStorageService: LocalstorageService) { }

  ngOnInit(): void {
  }

  payNow(planType : string, planPririce : string) {
    var userName = this.localStorageService.get('USERNAME');
    this.connectionService.payNow(planType, this.courseName, planPririce, userName).subscribe(resp =>{
      this.route.navigateByUrl('/home');
    });
  }

}
