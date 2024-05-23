// import { Injectable, inject } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

// @Injectable({ providedIn: 'root' })
// export class AuthGuard implements CanActivate {
// 	private router = inject(Router);
// 	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
// 		const token = localStorage.getItem('token');
// 		console.log(route);

// 		if (!token) {
// 			this.router.navigateByUrl('/');
// 			return false;
// 		}

// 		return true;
// 	}
// }

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const AuthGuardFn: CanActivateFn = (route, state) => {
	console.log('**AuthGuardFn**');

	const token = localStorage.getItem('token');
	console.log(route);

	if (!token) {
		const router = inject(Router);
		router.navigateByUrl('/');
		return false;
	}

	return true;
};
