import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NEVER } from 'rxjs';
import { ConnectionService } from '../connection.service';
import { LoginDetails } from '../LoginDetails';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  enableLoginSection : boolean = true;
  enableSignUpSection : boolean = false;
  enableResetPwd : boolean = false;
  enableLogInSignupSection : boolean = true;
  loginDetails: LoginDetails = new LoginDetails();
  contactForm!: FormGroup;
  constructor(private connectionService : ConnectionService) { 
  }

  ngOnInit(): void {
  }

  username = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  password = new FormControl('', [
    Validators.required
  ]);
  logIn() {
    this.enableLoginSection = true;
    this.enableSignUpSection = false;
    this.loginDetails = new LoginDetails();
  }
  signUp() {
    this.enableSignUpSection = true;
    this.enableLoginSection = false;
    this.loginDetails = new LoginDetails();
  }
  forgotPassword() {
    this.enableLogInSignupSection = false;
    this.enableResetPwd = true;
  }
  backToLogin(){
    this.logIn();
    this.enableLogInSignupSection = true;
    this.enableResetPwd = false;
  }
  close() {
    this.enableLoginSection = false;
    this.enableSignUpSection = false;
    this.enableResetPwd = false;
    this.enableLogInSignupSection = false;
  }
  userLogin(action : string) {
    this.connectionService.sendMessage(this.loginDetails, action).subscribe(() => {
      alert('Your message has been sent.');
      this.contactForm.reset();
    }, (error: any) => {
      console.log('Error', error);
    });
  }
}
