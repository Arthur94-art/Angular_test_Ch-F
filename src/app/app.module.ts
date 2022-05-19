import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeLayoutComponent} from './shared/components/home-page/home-layout.component';
import {FooterComponent} from './footer/footer.component';
import {MapPageComponent} from './shared/components/map-page/map-page.component';
import {UsersListComponent} from './shared/components/users-list/users-list.component';
import {AddUserComponent} from './shared/components/add-user/add-user.component';
import {LeafleatTutorialComponent} from './shared/components/leafleat-tutorial/leafleat-tutorial.component';
import {LoginComponentComponent} from './auth-page/login-component/login-component.component';

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
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
