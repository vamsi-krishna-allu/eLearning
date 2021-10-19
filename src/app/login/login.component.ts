import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NEVER } from 'rxjs';
import { ConfirmedValidator } from '../confirmed.validator';
import { ConnectionService } from '../connection.service';
import { LocalstorageService } from '../localstorage.service';
import { LoginDetails } from '../loginDetails';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';


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
  contactForm: FormGroup | undefined;
  loginForm: FormGroup = new FormGroup({});
  signupForm: FormGroup = new FormGroup({});
  forgotForm: FormGroup = new FormGroup({});
  constructor(private connectionService : ConnectionService, private fb: FormBuilder,  private localStorageService: LocalstorageService,
    private matSnackBar: MatSnackBar, private route : Router) { 
    this.loginForm = fb.group({
      emailId: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
    this.signupForm = fb.group({
      emailId: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
    this.forgotForm = fb.group({
      emailId: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]]
    }, { 
      validator: ConfirmedValidator('password', 'confirm_password')
    })
  }

  get f(){
    return this.loginForm.controls;
  }
  get f1(){
    return this.signupForm.controls;
  }
  get f2(){
    return this.forgotForm.controls;
  }
 

  ngOnInit(): void {
  }

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
  userLogin() {
    this.connectionService.authenticateUser(this.loginDetails).subscribe((response: any) => {
      this.localStorageService.set("TOKEN", response.jwttoken);
      this.matSnackBar.open("Logged in Succesfully", "Cool");
      this.contactForm?.reset();
      this.route.navigateByUrl('/home');
    }, (error: any) => {
      console.log('Error', error);
    });
  }

  userSignUp() {
    this.connectionService.registerUser(this.loginDetails).subscribe((response: any) => {
      this.matSnackBar.open("Registered Succesfully", "Awesome");
      this.contactForm?.reset();
    }, (error: any) => {
      console.log('Error', error);
    });
  }

  resetPassword() {
    this.connectionService.resetPassword(this.loginDetails).subscribe((response) => {
      this.matSnackBar.open("Password changed Succesfully", "Great");
      this.contactForm?.reset();
    }, (error: any) => {
      console.log('Error', error);
    });
  }
}
