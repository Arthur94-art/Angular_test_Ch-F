import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeLayoutComponent} from "./shared/components/home-page/home-layout.component";
import {AddUserComponent} from "./shared/components/add-user/add-user.component";
import {LeafleatTutorialComponent} from "./shared/components/leafleat-tutorial/leafleat-tutorial.component";

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: HomeLayoutComponent},
  {path: 'tutorial', component: LeafleatTutorialComponent},
  {path: 'add_user', component: AddUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
