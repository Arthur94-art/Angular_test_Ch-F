import { AngularFireAuth } from '@angular/fire/compat/auth';

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthAdminService } from "../admin/auth/services/auth-admin.service";
import { AuthUserService } from '../user/auth/services/auth-user.service';
import { SharedService } from '../shared/shared.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	constructor(public authAdminService: AuthAdminService, private router: Router,
		private angularFireAuth: AngularFireAuth, public authUserService: AuthUserService,
		public sharedService: SharedService) {
	}

	ngOnInit(): void {
		this.angularFireAuth.user.subscribe((response) => {
			this.sharedService.isUserLogged = !!response;
		})
	}

	getPathForCurrentModule(path: string) {
		return this.authAdminService.isAuth() ? ['/admin', path] : ['/user', path];
	}

	logout(e: Event) {
		e.preventDefault();
		this.sharedService.isShowLoader = true;
		if (this.sharedService.isUserLogged) {
			this.angularFireAuth.signOut().then(() => {
				this.router.navigate(['/user', 'login'])
				this.sharedService.isShowLoader = false;
				this.sharedService.submitted = false;
			});
		} else {
			this.authAdminService.logout();
			this.router.navigate(['/admin', 'login']);
			this.sharedService.isShowLoader = false;
			this.sharedService.submitted = false;
		}
	}
}
