import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserAuthService } from "../services/user-auth.service";

@Component({
	selector: 'app-login-component',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	registerForm!: FormGroup;
	loginForm!: FormGroup;

	constructor(private userAuth: UserAuthService, private router: Router) {
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
		this.userAuth.createUser(this.registerForm.value)
	}
	logIn(){
		this.userAuth.enterWithEmailAndPassword(this.loginForm.value);

	}
}