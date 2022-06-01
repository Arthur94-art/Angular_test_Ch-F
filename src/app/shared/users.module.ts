import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { ErrorPageComponent } from "../error-page/error-page.component";
import { InputMaskModule } from 'ngx-input-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from '../user/components/main-layout/main-layout.component';
import { LoginComponent } from '../user/auth/login-component/login.component';
import { UserAuthLoggedGuard } from '../user/auth/services/users-guards/user-auth-logged.guard';
import { HomeLayoutComponent } from '../user/components/home-page/home-layout.component';
import { UsersAuthNotLoggedGuard } from '../user/auth/services/users-guards/users-auth-not-logged.guard';
import { LeafleatTutorialComponent } from '../user/components/leafleat-tutorial/leafleat-tutorial.component';
import { AuthUserService } from '../user/auth/services/auth-user.service';

@NgModule({
	declarations: [MainLayoutComponent],
	imports: [
		CommonModule,
		InputMaskModule,
		ReactiveFormsModule,
		BsDatepickerModule,
		RouterModule.forChild([{
			path: '', component: MainLayoutComponent, children: [
				{ path: 'login', component: LoginComponent, canActivate: [UserAuthLoggedGuard] },
				{ path: 'home', component: HomeLayoutComponent, canActivate: [UsersAuthNotLoggedGuard] },
				{ path: 'tutorial', component: LeafleatTutorialComponent, canActivate: [UsersAuthNotLoggedGuard] }, { path: '', redirectTo: '/user/home', pathMatch: 'full' },
				{ path: '404', component: ErrorPageComponent },
				{ path: '**', redirectTo: '/404' }
			]
		}]
		)
	],
	exports: [RouterModule,
		InputMaskModule,
		ReactiveFormsModule,
		BsDatepickerModule],
	providers: [AuthUserService]
})
export class UsersModule {
}
