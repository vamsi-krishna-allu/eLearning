import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NEVER } from 'rxjs';
import { ConfirmedValidator } from '../confirmed.validator';
import { ConnectionService } from '../connection.service';
import { LocalstorageService } from '../localstorage.service';
import { LoginDetails } from '../loginDetails';
import {MatSnackBar} from '@angular/material/snack-bar';


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
  form: FormGroup = new FormGroup({});
  constructor(private connectionService : ConnectionService, private fb: FormBuilder,  private localStorageService: LocalstorageService,
    private matSnackBar: MatSnackBar) { 
    this.form = fb.group({
      username: ['',[Validators.required]],
      emailId: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]]
    }, { 
      validator: ConfirmedValidator('password', 'confirm_password')
    })
  }

  get f(){
    return this.form.controls;
  }
 

  ngOnInit(): void {
  }

  
 /* username = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  password = new FormControl('', [
    Validators.required
  ]);
  confirm_password = new FormControl('', [
    Validators.required
  ]);*/
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
      this.contactForm.reset();
    }, (error: any) => {
      console.log('Error', error);
    });
  }

  userSignUp() {
    this.connectionService.registerUser(this.loginDetails).subscribe((response: any) => {
      this.matSnackBar.open("Registered Succesfully", "Awesome");
      this.contactForm.reset();
    }, (error: any) => {
      console.log('Error', error);
    });
  }

  resetPassword() {
    this.connectionService.resetPassword(this.loginDetails).subscribe((response) => {
      this.matSnackBar.open("Password changed Succesfully", "Great");
      this.contactForm.reset();
    }, (error: any) => {
      console.log('Error', error);
    });
  }
}
