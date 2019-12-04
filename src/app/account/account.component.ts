import { Component, OnInit, ViewChild } from '@angular/core';

import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {User} from './user';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public CreateAccount: boolean;
  loginForm: FormGroup;
  loginFormRegister: FormGroup;
  isValidFormSubmitted = null;
  submitted = false;
  formErrors = {
    'username': '',
    'password': '',
    'email': ''
  };
  validationMessages = {
    'username': {
      'required': 'username is required.',
      'minlength': 'username must be at least 2 characters long.',
      'maxlength': 'username cannot be more than 25 characters long.'
    },
    'password': {
      'required': 'password is required.',
    },
    'email': {
      'required': 'email is required.',
      'pattern' : 'Email not valid.',
      'email': 'Email not valid'
    }
  };
  constructor(private formBuilder: FormBuilder) {
   this.Loadformvalidation();
  }

  ngOnInit() {
    this.Loadformvalidation();
    
  }
  LoadFrontEndValidation() {
    this.CreateAccount = false;
    this.loginFormRegister = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
    this.loginFormRegister.valueChanges
    .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }
  Loadformvalidation() {
    this.CreateAccount = false;
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      password: ['', Validators.required]
    });
    this.loginForm.valueChanges
    .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }
  onValueChanged(data?: any) {
    if (!this.loginForm) { return; }
    const form = this.loginForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
  onValueChangedCreate(data?: any) {
    if (!this.loginFormRegister) { return; }
    const form = this.loginFormRegister;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
  Create() {
    this.CreateAccount = true;
    this.loginFormRegister = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      password: ['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
    this.loginFormRegister.valueChanges
    .subscribe(data => this.onValueChangedCreate(data));

    this.onValueChangedCreate();
  }
  onSubmit() {
    this.submitted = true;
    console.log('data Submitted:', this.loginForm.value);
    this.isValidFormSubmitted = false;
    if (this.loginForm.invalid) {
      return;
    }
  }
  OnSubmitCreate() {
    this.submitted = true;
    console.log('data Submitted:', this.loginFormRegister.value);
    this.isValidFormSubmitted = false;
    if (this.loginFormRegister.invalid) {
      return;
    }
  }
  Signin() {
    this.CreateAccount = false;
  }
}
