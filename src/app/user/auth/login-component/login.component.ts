import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthUserService } from "../services/auth-user.service";
import { SharedService } from 'src/app/shared/shared.service';

@Component({
	selector: 'app-login-component',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	registerForm!: FormGroup;
	loginForm!: FormGroup;

	constructor(public authUserService: AuthUserService,
		public sharedService: SharedService) {
	}

	ngOnInit(): void {
		this.registerForm = this.getFormValue(this.registerForm);
		this.loginForm = this.getFormValue(this.loginForm);
	}

	getFormValue(form: FormGroup) {
		return form = new FormGroup({
			email: new FormControl(null, [Validators.required, Validators.email]),
			password: new FormControl(null, [Validators.required, Validators.minLength(8)])
		})
	}

	singUp() {
		this.authUserService.createUser(this.registerForm.value);
	}
	logIn() {
		this.authUserService.enterWithEmailAndPassword(this.loginForm.value);

	}
}
