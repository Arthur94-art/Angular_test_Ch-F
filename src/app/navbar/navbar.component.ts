import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserAuthService } from './../shared/auth/services/user-auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthAdminService } from "../admin/auth/services/authAdmin.service";

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	isUserLogged: boolean = false;
	constructor(public authAdminService: AuthAdminService, private router: Router,
		public userFirebaseAuth: AngularFireAuth, public auth: UserAuthService) {
	}

	ngOnInit(): void {
		this.userFirebaseAuth.user.subscribe((response) => {
			this.isUserLogged = !!response;
		})
	}

	getPath(path: string) {
		return this.authAdminService.isAuth() ? ['/admin', path] : ['/user', path];
	}

	logout(e: Event) {
		e.preventDefault();
		if (this.isUserLogged) {
			this.userFirebaseAuth.signOut()
			this.router.navigate(['/user', 'login']);
		} else {
			this.authAdminService.logout();
			this.router.navigate(['/admin', 'login']);
		}
	}
}