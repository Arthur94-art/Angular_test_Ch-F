import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, Subject, throwError} from "rxjs";
import {tap,catchError} from 'rxjs/operators'
import {environment} from "../../../../environments/environment";
import {User} from "../../../interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})
export class AuthAdminService {
  public error$: Subject<any> = new Subject<string>()
  constructor(private http: HttpClient) {
  }

  get token() {
    const expDate = new Date(localStorage.getItem('fb-token-exp')!)
    if(new Date() > expDate){
      this.logout();
      return null;
    }
    return localStorage.getItem('fb-token')
  }

  login(user: User): Observable<any> {
    user.returnSecureToken = true;

    return this.http.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebase.apiKey}`,
      user)
      .pipe(
        tap(this.setToken),
        catchError(this.handleError.bind(this))
      )
  }
  private handleError(error: HttpErrorResponse){
    const {message} = error.error.error;
    switch (message){
      case 'INVALID_EMAIL':
        this.error$.next('Wrong email...')
        break
      case 'INVALID_PASSWORD':
        this.error$.next('Wrong password...')
        break
      case 'EMAIL_NOT_FOUND':
        this.error$.next('Email not found...')
        break
    }
    return throwError(error);
  }

  logout() {
    this.setToken(null);
  }

  isAuth(): boolean {
    return !!this.token;
  }

  setToken(response: any) {
    if(response){
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
      localStorage.setItem('fb-token', response.idToken);
      localStorage.setItem('fb-token-exp', expDate.toString());
    }else{
      localStorage.clear();
    }
  }
}