import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, HostListener } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { EmailMessage } from 'src/emailMessage';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {

  contactForm : FormGroup;
  disabledSubmitButton : boolean = true;
  optionsSelect : Array<any> = [];
  emailMessage : EmailMessage = new EmailMessage();

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  nameFormControl = new FormControl('', [
    Validators.required
  ]);

  messageFormControl = new FormControl('', [
    Validators.required
  ]);

  @HostListener('input') oninput() {

    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(fb: FormBuilder, private connectionService: ConnectionService) {

  this.contactForm = fb.group({
    'contactFormName': ['', Validators.required],
    'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
    'contactFormSubjects': ['', Validators.required],
    'contactFormMessage': ['', Validators.required],
    'contactFormCopy': ['', Validators.requiredTrue],
    });
  }

  ngOnInit() {}

  onSubmit(action : string) {
    this.connectionService.sendMessage(this.emailMessage, action).subscribe(() => {
      alert('Your message has been sent.');
      this.contactForm.reset();
    }, (error: any) => {
      console.log('Error', error);
    });
  }

}
