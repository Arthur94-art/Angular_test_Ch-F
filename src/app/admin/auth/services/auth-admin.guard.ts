import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthAdminService} from "./authAdmin.service";

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate, CanDeactivate<unknown> {
  constructor(private authAdminService: AuthAdminService,
              private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authAdminService.isAuth()) {
      return true;
    } else {
      this.authAdminService.logout();
      this.router.navigate(['/admin', 'login'],
        {
          queryParams: {
            loginAgain: true
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