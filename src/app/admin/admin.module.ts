import { SharedModuleModule } from './../shared/shared-module.module';
import { AuthAdminLoggedGuard } from './auth/services/admin-guards/auth-admin-loged.guard';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AdminLayoutComponent } from "./components/admin-layout/admin-layout.component";
import { AdminLoginComponent } from './auth/admin-login/admin-login.component';
import { AuthAdminNotLoggedGuard } from "./auth/services/admin-guards/auth-admin-not-logged.guard";
import { AuthAdminService } from "./auth/services/auth-admin.service";
import { ErrorPageComponent } from "../error-page/error-page.component";
import { HomeLayoutComponent } from '../user/components/home-page/home-layout.component';
import { LeafleatTutorialComponent } from '../user/components/leafleat-tutorial/leafleat-tutorial.component';
import { AddUserComponent } from '../user/components/add-user/add-user.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminLoginComponent,
  ],
  imports: [
    SharedModuleModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          { path: 'login', component: AdminLoginComponent, canActivate: [AuthAdminLoggedGuard] },
          { path: 'home', component: HomeLayoutComponent, canActivate: [AuthAdminNotLoggedGuard] },
          { path: 'tutorial', component: LeafleatTutorialComponent, canActivate: [AuthAdminNotLoggedGuard] },
          { path: 'add-user', component: AddUserComponent, canActivate: [AuthAdminNotLoggedGuard] },
          { path: '404', component: ErrorPageComponent },
          { path: '', redirectTo: 'admin/home', pathMatch: 'full' },
          { path: '**', redirectTo: '/404' }
        ]
      },
    ]),
  ],
  exports: [RouterModule, SharedModuleModule],
  providers: [AuthAdminService]
})
export class AdminModule {
}
