import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { ItemService } from 'src/app/services/item.service';
import { PasswordStrengthValidator } from 'src/app/password-validators';

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
    private empService: EmployeeService,
    private itemService: ItemService,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
      // password: ['', Validators.compose([
      //   Validators.required, PasswordStrengthValidator])],
    });
  }

  get f() { return this.loginForm.controls; }


  onSubmit() {debugger
    this.submitted = true;
    this.isSignUpFailed = false;
    if (this.loginForm.invalid) {
      return
    }
    this.empService.login(this.loginForm.value).subscribe(val => {
      if (val.result) {
        this.itemService.setToken(val.result)
        this.isSuccessful = true;
        // setTimeout(() => {
          this.router.navigate(['dashboard']);
        // }, 4000);
      }
    },
      error => {
        this.message = " Invalid username and password please try again...";
        this.isSignUpFailed = true;
      }
    );
  }
  

}
