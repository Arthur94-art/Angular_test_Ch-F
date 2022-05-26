import {AuthAdminLoggedGuard} from './auth/services/admin-guards/auth-admin-loged.guard';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {AdminLayoutComponent} from "./components/admin-layout/admin-layout.component";
import {LeafleatTutorialComponent} from "../shared/components/leafleat-tutorial/leafleat-tutorial.component";
import {AddUserComponent} from "../shared/components/add-user/add-user.component";
import {HomeLayoutComponent} from "../shared/components/home-page/home-layout.component";
import {AdminLoginComponent} from './auth/admin-login/admin-login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthAdminNotLoggedGuard} from "./auth/services/admin-guards/auth-admin-not-logged.guard";
import {AuthAdminService} from "./auth/services/authAdmin.service";

@NgModule({
  declarations: [
    AdminLoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: 'login', component: AdminLoginComponent, canActivate: [AuthAdminLoggedGuard]},
          {path: 'home', component: HomeLayoutComponent, canActivate: [AuthAdminNotLoggedGuard]},
          {path: 'tutorial', component: LeafleatTutorialComponent, canActivate: [AuthAdminNotLoggedGuard]},
          {path: 'add-user', component: AddUserComponent, canActivate: [AuthAdminNotLoggedGuard]},
          {path: '', redirectTo: 'admin/home', pathMatch: 'full'}
        ]
      },
    ]),
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [AuthAdminService]
})
export class AdminModule {
}