import { HttpInterceptorFn } from '@angular/common/http';

export const ErrorApiInterceptorFn: HttpInterceptorFn = (req, next) => {
	console.log('---new interceptor', req);
	return next(req);
};
