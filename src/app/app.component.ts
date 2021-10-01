import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { SpinnerService } from './spinner.service';
import { LocalstorageService } from './localstorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  courseMenu : boolean = false;
  //selectedCourse : string = '';
  isUserLoggedIn: boolean = false;
  showTabs: boolean = true;

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
  ]
  showSpinner: boolean | undefined;

  colorToggle = {
    colorValue: "primary",
    bgValue: "accent",
  }
  constructor(private route: Router,private dialog: MatDialog, private spinnerService: SpinnerService, private localStorageService: LocalstorageService) {
  }
  signInDialog() {
    const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  logoutUser() {
    this.localStorageService.remove("TOKEN");
    this.route.navigateByUrl('/home');
  }

  courseDialog(action : string) {
    this.courseMenu = true;
    //this.selectedCourse = action;
  }
  menuDialog() {
    this.courseMenu = false;
  }
  ngOnInit() {
    this.spinnerService.visibility.subscribe(flag => {
      this.showSpinner = flag;
    });
    this.localStorageService.isAuthenticated.subscribe( isLoggedIn => {
      this.isUserLoggedIn = isLoggedIn;
    });
    if(window.innerWidth < 800){
      this.showTabs = false;
    }
  }

  navigateTo(link: string) {
    this.route.navigateByUrl(link);
  }

@HostListener('window:resize', ['$event'])
onResize() {
   if(window.innerWidth < 800){
    this.showTabs = false;
   }
}

}
