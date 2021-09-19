import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  courseMenu : boolean = false;
  selectedCourse : string = '';
  title = ["N", "O", " ", "B", "O", "O", "K", "S"];
  routeData = [
    {
      label: 'home',
      link: '/home',
      icon: 'home',
    },
    {
      label: 'courses',
      link: '/courses',
      icon: 'library_books',
    },
    {
      label: 'mock tests',
      link: '/mockTests',
      icon: 'question_answer',
    },
    {
      label: 'about',
      link: '/about',
      icon: 'contact_support',
    },
    {
      label: 'faq',
      link: '/faq',
      icon: 'thumb_up',
    },
    {
      label: 'contact us',
      link: '/contact',
      icon: 'call',
    },
    {
      label: 'credits',
      link: '/credits',
      icon: 'thumb_up',
    }
  ]
  showSpinner: boolean | undefined;

  colorToggle = {
    colorValue: "primary",
    bgValue: "accent",
  }
  constructor(private route: Router,private dialog: MatDialog, private spinnerService: SpinnerService) {
  }
  signInDialog() {
    const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  courseDialog(action : string) {
    this.courseMenu = true;
    this.selectedCourse = action;
  }
  menuDialog() {
    this.courseMenu = false;
  }
  ngOnInit() {
    this.spinnerService.visibility.subscribe(flag => {
      this.showSpinner = flag;
    })
  }

  navigateTo(link: string) {
    this.route.navigateByUrl(link);
  }

}
