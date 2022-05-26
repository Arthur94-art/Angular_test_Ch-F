import { Router } from '@angular/router';
import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';
import { AuthAdminService } from '../admin/auth/services/authAdmin.service';

@Component({
	selector: 'app-error-page',
	templateUrl: './error-page.component.html',
	styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

	constructor(public sharedService: SharedService,
		public authAdminService: AuthAdminService,
		private router: Router) { }

	ngOnInit(): void {
	}

	getPathFromError() {
		if (this.authAdminService.isAuth()) this.router.navigate(['/admin', 'home'])
		else if (this.sharedService.isUserLogged) this.router.navigate(['/user', 'home'])
		else this.router.navigate(['/user', 'login'])
	}
}