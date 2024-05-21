// import { Injectable } from '@angular/core';
// import { CanDeactivate } from '@angular/router';
// import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
	canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

// @Injectable({
// 	providedIn: 'root'
// })
// export class ExitGuard implements CanDeactivate<CanComponentDeactivate> {
// 	canDeactivate(component: CanComponentDeactivate): Observable<boolean> | Promise<boolean> | boolean {
// 		return component.canDeactivate();
// 	}
// }

import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';

export const ExitGuardFn: CanDeactivateFn<CanComponentDeactivate> = (component: CanComponentDeactivate) => {
	return component.canDeactivate();
};
