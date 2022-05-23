import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  isLogged: boolean = false;

  constructor(public userFirebaseAuth: AngularFireAuth) {
  }

  // async signIn(email: string, password: string) {
  //   await this.userFirebaseAuth.signInWithEmailAndPassword(email, password)
  //     .then((res) => {
  //       localStorage.setItem('user', JSON.stringify(res.user))
  //     })
  // }
  //
  // async signUp(email: string, password: string) {
  //   await this.userFirebaseAuth.createUserWithEmailAndPassword(email, password)
  //     .then((res) => {
  //       localStorage.setItem('user', JSON.stringify(res.user))
  //     })
  // }
  //
  // logout() {
  //   this.userFirebaseAuth.signOut();
  //   localStorage.removeItem('user')
  // }
}
