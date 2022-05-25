
import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";

@Injectable()
export class UserAuthService {
  constructor(public userFirebaseAuth: AngularFireAuth, private router: Router) {
  }

  createUser(signUpForm: { email: string, password: string }) {
    const {email, password} = signUpForm;
    this.userFirebaseAuth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.router.navigate(['/user', 'home'])
      });
  }

  enterWithEmailAndPassword(logInForm: { email: string, password: string }) {
    const {email, password} = logInForm;
    this.userFirebaseAuth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.router.navigate(['/user', 'home'])
      })
  }
}
