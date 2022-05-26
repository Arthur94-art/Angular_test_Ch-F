import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
	{ path: 'user', loadChildren: () => import('./shared/users.module').then(m => m.UsersModule) },
	{ path: 'admin', loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule) },
	{ path: '404', component: ErrorPageComponent },
	{ path: '**', redirectTo: '/404' }
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
