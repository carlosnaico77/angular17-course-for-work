// import { Injectable, inject } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
// import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';

// export interface CanComponentDeactive {
// 	canDeactivate: () => Observable<boolean> | boolean;
// }

// @Injectable({ providedIn: 'root' })
// export class ExitGuard implements CanDeactivate<CanComponentDeactive> {
// 	dialog = inject(MatDialog);

// 	canDeactivate(
// 		component: CanComponentDeactive,
// 		currentRoute: ActivatedRouteSnapshot,
// 		currentState: RouterStateSnapshot,
// 		nextState: RouterStateSnapshot
// 	): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
// 		const formularioValido = component.canDeactivate();

// 		if (formularioValido) {
// 			const reference = this.dialog.open(ConfirmDialogComponent);
// 			return reference.afterClosed();
// 		}

// 		return true;
// 	}
// }

import { inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';

export interface CanComponentDeactive {
	canDeactivate: () => Observable<boolean> | boolean;
}

export const ExitGuardFn: CanDeactivateFn<CanComponentDeactive> = (component: CanComponentDeactive) => {
	const formularioValido = component.canDeactivate();

	if (formularioValido) {
		const dialog = inject(MatDialog);
		const reference = dialog.open(ConfirmDialogComponent);
		return reference.afterClosed();
	}
	return true;
};
