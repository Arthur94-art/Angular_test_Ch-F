import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from "./shared/components/main-layout/main-layout.component";
import {HomeLayoutComponent} from "./shared/components/home-page/home-layout.component";
import {LeafleatTutorialComponent} from "./shared/components/leafleat-tutorial/leafleat-tutorial.component";
import {AddUserComponent} from "./shared/components/add-user/add-user.component";

const routes: Routes = [{
  path: '', component: MainLayoutComponent, children: [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: '', component: HomeLayoutComponent},
    {path: 'tutorial', component: LeafleatTutorialComponent},
    {path: 'add-user', component: AddUserComponent},
  ],
},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule)}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
