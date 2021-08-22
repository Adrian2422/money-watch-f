import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate, Router,
	RouterStateSnapshot,
	UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../app/login/services/login.service';
import { tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	private isLoggedIn!: boolean;

	constructor(private loginService: LoginService, private router: Router) {}
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {

		this.loginService.token$.pipe(
			untilDestroyed(this),
			tap(
				(token: string | null): boolean => this.isLoggedIn = Boolean(token)
			)
		).subscribe();

		return this.isLoggedIn
			? state.url === '/login' || this.router.navigate(['/'])
			: !(state.url !== '/login') || this.router.navigate(['/login']);
	}
}
