import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
) {
 this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
}
  get f() { return this.loginForm.controls; }
ngOnInit() {
    this.loginForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', Validators.required]
    });

}
 onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    localStorage.setItem('user', this.loginForm.value.name);
    localStorage.getItem('user');
    this.router.navigate(['onlineTest']);
}
}
