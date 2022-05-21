import { FormGroup} from '@angular/forms';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
  }
  submit() {
  }
}