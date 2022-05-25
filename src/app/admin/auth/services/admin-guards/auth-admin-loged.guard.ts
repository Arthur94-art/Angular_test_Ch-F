import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthAdminService } from '../authAdmin.service';

@Injectable({
	providedIn: 'root'
})
export class AuthAdminLoggedGuard implements CanActivate, CanDeactivate<unknown> {
	constructor(private authAdminService: AuthAdminService,
		private router: Router) { }
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		if (!this.authAdminService.isAuth()) {
			return true;
		} else {

			this.router.navigate(['/admin', 'home'],
				{
					queryParams: {
						isLogged: true
					}
				})
		}
		return false;
	}
	canDeactivate(
		component: unknown,
		currentRoute: ActivatedRouteSnapshot,
		currentState: RouterStateSnapshot,
		nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return true;
	}
}