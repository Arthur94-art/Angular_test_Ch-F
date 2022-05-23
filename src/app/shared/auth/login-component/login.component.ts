import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private userAuth: AngularFireAuth, private router: Router) {
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    })
  }

  async createUser() {
    const {email, password} = await this.registerForm.value;
  await  this.userAuth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log('registered', user)
        this.router.navigate(['/user', 'home'])

      })
  }
}