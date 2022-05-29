import { SharedService } from '../../../shared.service';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";

@Injectable()
export class AuthUserService {
	errorInfo: string = '';
	constructor(public angularFireAuth: AngularFireAuth,
		private router: Router,
		private sharedService: SharedService) {
	}

	createUser(signUpForm: { email: string, password: string }) {
		this.sharedService.isShowLoader = true;
		const { email, password } = signUpForm;
		this.sharedService.submitted = true;
		this.angularFireAuth.createUserWithEmailAndPassword(email, password)
			.then(() => {
				this.sharedService.isShowLoader = false;
				this.router.navigate(['/user', 'home'])
				this.errorInfo = '';
				this.sharedService.submitted = false;
			}).catch((e) => {
				this.sharedService.isShowLoader = false;
				this.sharedService.submitted = false;
				this.errorInfo = this.convertErrorMessage(e.code);
			})
	}

	enterWithEmailAndPassword(logInForm: { email: string, password: string }) {
		this.sharedService.isShowLoader = true;
		const { email, password } = logInForm;
		this.sharedService.submitted = true;
		this.angularFireAuth.signInWithEmailAndPassword(email, password)
			.then(() => {
				this.router.navigate(['/user', 'home'])
				this.sharedService.isShowLoader = false;
				this.errorInfo = '';
				this.sharedService.submitted = false;
			}).catch((e) => {
				this.sharedService.isShowLoader = false;
				this.sharedService.submitted = false;
				this.errorInfo = this.convertErrorMessage(e.code);
			})
	}
	convertErrorMessage(code: string): string {
		switch (code) {
			case 'auth/email-already-in-use': {
				return 'This user is already registered...';
			}
			case 'auth/user-not-found': {
				return 'Email not found...'
			}
			default: {
				return 'Login error try again later.';
			}
		}
	}
}