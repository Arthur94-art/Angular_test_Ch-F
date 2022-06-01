import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import { SharedService } from 'src/app/shared/shared.service';

@Injectable()
export class AuthUserService {
	errorInfo: string = '';
	constructor(public angularFireAuth: AngularFireAuth,
		private router: Router,
		private sharedService: SharedService) {
	}

	getTypeOfRequest(
		promise: Promise<any>,
		pathToNavigate: string[] = ['/user', 'home']) {
		this.sharedService.isShowLoader = true;
		this.sharedService.submitted = true;
		promise.then(() => {
			this.sharedService.isShowLoader = false;
			this.router.navigate(pathToNavigate)
			this.errorInfo = '';
			this.sharedService.submitted = false;
		}).catch((e) => {
			this.sharedService.isShowLoader = false;
			this.sharedService.submitted = false;
			this.errorInfo = this.convertErrorMessage(e.code);
		})
	}

	createUser(signUpForm: { email: string, password: string }) {
		const { email, password } = signUpForm;
		this.getTypeOfRequest(this.angularFireAuth.createUserWithEmailAndPassword(email, password))
	}
	enterWithEmailAndPassword(logInForm: { email: string, password: string }) {
		const { email, password } = logInForm;
		this.getTypeOfRequest(this.angularFireAuth.signInWithEmailAndPassword(email, password))
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
