import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any = FormGroup;
  loading = false;
  submitted = false;
  isSuccessful = false;
  isSignUpFailed = false;
  message = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private appService: AppService,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() { return this.loginForm.controls; }


  onSubmit() {debugger
    
    this.submitted = true;
    this.isSignUpFailed = false;
    if (this.loginForm.invalid) {
      return
    }
    this.appService.login(this.loginForm.value).subscribe(val => {
      this.isSuccessful = true;
      setTimeout(() => {
        this.router.navigate(['dashboard']);
      }, 4000);
    },
      error => {
        this.message = " Invalid username and password please try again...";
        this.isSignUpFailed = true;
      }
    );
  }
}
