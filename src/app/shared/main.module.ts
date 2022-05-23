import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainLayoutComponent} from "./components/main-layout/main-layout.component";
import {RouterModule} from "@angular/router";
import {HomeLayoutComponent} from "./components/home-page/home-layout.component";
import {AuthAdminGuard} from "../admin/auth/services/auth-admin.guard";
import {LeafleatTutorialComponent} from "./components/leafleat-tutorial/leafleat-tutorial.component";
import {AddUserComponent} from "./components/add-user/add-user.component";
import {LoginComponent} from "./auth/login-component/login.component";


@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
        path: '', component: MainLayoutComponent, children: [
          {path: 'login', component: LoginComponent},
          {path: 'home', component: HomeLayoutComponent},
          {path: 'tutorial', component: LeafleatTutorialComponent},
          {path: 'add-user', component: AddUserComponent},
          {path: '', redirectTo: 'user/login', pathMatch: 'full'},
        ]
      }]
    )
  ],
  exports: [RouterModule]
})
export class MainModule {
}