import { HttpErrorResponse, HttpInterceptorFn, HttpStatusCode } from '@angular/common/http';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, throwError } from 'rxjs';

export const ErrorApiInterceptor: HttpInterceptorFn = (req, next) => {
	console.log('---ErrorApiInterceptorFn', req);
	const _snackBar = inject(MatSnackBar);

	return next(req).pipe(
		catchError((error: HttpErrorResponse) => {
			if (error.status === HttpStatusCode.Unauthorized) {
				_snackBar.open('No tienes acceso', 'OK', { horizontalPosition: 'right', verticalPosition: 'top' });
			} else {
				_snackBar.open('Sucedio un error inesperado, intenta más tarde', 'OK', {
					horizontalPosition: 'right',0
					verticalPosition: 'top'
				});
			}
			return throwError(() => error);
		})
	);
};
