import { SharedService } from './../../../shared.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { User } from "../../../interfaces/interfaces";
import { AuthAdminService } from "../services/auth-admin.service";

@Component({
	selector: 'app-admin-login',
	templateUrl: './admin-login.component.html',
	styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
	form!: FormGroup;

	constructor(public authAdminService: AuthAdminService,
		private router: Router,
		public sharedService: SharedService) {
	}

	ngOnInit(): void {
		this.form = new FormGroup({
			email: new FormControl(null,
				[Validators.email, Validators.required]),
			password: new FormControl(null,
				[Validators.required, Validators.minLength(6)])
		})
	}

	submit() {
		if (this.form.invalid) {
			return;
		}
		this.sharedService.submitted = true;
		this.sharedService.isShowLoader = true;
		const user: User = {
			email: this.form.value.email,
			password: this.form.value.password
		}
		this.authAdminService.login(user).subscribe(() => {
			this.form.reset();
			this.router.navigate(['admin', 'home'])
			this.sharedService.isShowLoader = false;
		}, () => {
			this.sharedService.submitted = false;
			this.sharedService.isShowLoader = false;
		})
	}
}