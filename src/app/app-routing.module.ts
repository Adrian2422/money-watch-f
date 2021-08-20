import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
	{
		path: 'login',
		component: LoginComponent,
		canActivate: [AuthGuard]
	}
];

@NgModule({
	declarations: [],
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
