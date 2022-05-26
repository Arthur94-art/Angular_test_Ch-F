import { SharedService } from './../../../shared.service';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";

@Injectable()
export class UserAuthService {
	constructor(public userFirebaseAuth: AngularFireAuth,
		private router: Router,
		private sharedService: SharedService) {
	}

	createUser(signUpForm: { email: string, password: string }) {
		this.sharedService.isShowLoader = true;
		const { email, password } = signUpForm;
		this.userFirebaseAuth.createUserWithEmailAndPassword(email, password)
			.then((user) => {
				this.sharedService.isShowLoader = false;
				this.router.navigate(['/user', 'home'])
			});
	}

	enterWithEmailAndPassword(logInForm: { email: string, password: string }) {
		this.sharedService.isShowLoader = true;
		const { email, password } = logInForm;
		this.userFirebaseAuth.signInWithEmailAndPassword(email, password)
			.then((user) => {
				this.router.navigate(['/user', 'home'])
				this.sharedService.isShowLoader = false;
			})
	}
}
