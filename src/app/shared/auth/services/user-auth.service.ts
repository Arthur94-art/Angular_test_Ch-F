import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(public userFirebaseAuth: AngularFireAuth, private router: Router) {
  }

  public isUserSigned() {
    let isSigned = false;
    return function () {
      isSigned = !isSigned;
      return isSigned;
    }
  };

  createUser(signUpForm: any) {
    const {email, password} = signUpForm;
    this.userFirebaseAuth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.isUserSigned();
        console.log(this.isUserSigned);
        this.router.navigate(['/user', 'home'])
      });
  }

}
