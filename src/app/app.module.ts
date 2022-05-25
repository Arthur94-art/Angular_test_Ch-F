import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeLayoutComponent} from './shared/components/home-page/home-layout.component';
import {FooterComponent} from './footer/footer.component';
import {MapPageComponent} from './shared/components/map-page/map-page.component';
import {UsersListComponent} from './shared/components/users-list/users-list.component';
import {AddUserComponent} from './shared/components/add-user/add-user.component';
import {LeafleatTutorialComponent} from './shared/components/leafleat-tutorial/leafleat-tutorial.component';
import {LoginComponent} from './shared/auth/login-component/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ErrorPageComponent} from './error-page/error-page.component';
import {AdminLayoutComponent} from "./admin/components/admin-layout/admin-layout.component";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import {AdminModule} from "./admin/admin.module";
import {UsersModule} from "./shared/users.module";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeLayoutComponent,
    FooterComponent,
    MapPageComponent,
    UsersListComponent,
    AddUserComponent,
    LeafleatTutorialComponent,
    LoginComponent,
    AdminLayoutComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AdminModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
