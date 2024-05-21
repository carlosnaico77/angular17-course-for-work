// import { Injectable, inject } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

// @Injectable({
// 	providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
// 	private router = inject(Router);
// 	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
// 		const token = localStorage.getItem('token');
// 		if (!token) {
// 			this.router.navigateByUrl('/login');
// 			return false;
// 		}
// 		return true;
// 	}
// }

import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const AuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
	const token = localStorage.getItem('token');
	if (!token) {
		const router = inject(Router);
		router.navigateByUrl('/login');
		return false;
	}

	return true;
};

export const AuthGuard2: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
	console.log('---------AuthGuard2--------');

	return true;
};
