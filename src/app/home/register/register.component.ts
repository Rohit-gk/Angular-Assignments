import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { PasswordStrengthValidator } from 'src/app/password-validators';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    form: any = FormGroup;
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
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;
        this.isSignUpFailed = false;

        if (this.form.invalid) {
            return
        }
        this.empService.register(this.form.value).subscribe(val => {
            this.isSuccessful = true;
            setTimeout(() => {
                this.router.navigate(['login']);
            }, 4000);
        },
            error => {
                this.message = "Registration Failed";
                this.isSignUpFailed = true;
            })
    }
}
