import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {AdminLayoutComponent} from "./components/admin-layout/admin-layout.component";
import {LeafleatTutorialComponent} from "../shared/components/leafleat-tutorial/leafleat-tutorial.component";
import {AddUserComponent} from "../shared/components/add-user/add-user.component";
import {HomeLayoutComponent} from "../shared/components/home-page/home-layout.component";
import {AdminLoginComponent} from './auth/admin-login/admin-login.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AdminLoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: 'admin-login', component: AdminLoginComponent},
          {path: 'home', component: HomeLayoutComponent},
          {path: 'tutorial', component: LeafleatTutorialComponent},
          {path: 'add-user', component: AddUserComponent},
          {path: '', redirectTo: '/admin/admin-login', pathMatch: 'full'}
        ]
      },
    ]),
    ReactiveFormsModule
  ]
})
export class AdminModule {
}