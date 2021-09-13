import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

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
  constructor() { }

  ngOnInit(): void {
  }

  username = new FormControl('', [
    Validators.required
  ]);
  password = new FormControl('', [
    Validators.required
  ]);
  logIn() {
    this.enableLoginSection = true;
    this.enableSignUpSection = false;
  }
  signUp() {
    this.enableSignUpSection = true;
    this.enableLoginSection = false;
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
}
