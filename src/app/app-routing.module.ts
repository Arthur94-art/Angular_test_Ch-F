import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
	{ path: 'user', loadChildren: () => import('./shared/main.module').then(m => m.MainModule) },
	{ path: 'admin', loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule) },
	{ path: '', redirectTo: '/user/login', pathMatch: 'full' }
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
