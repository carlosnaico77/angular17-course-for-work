import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import routes from './app.routes';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { ErrorApiInterceptorFn } from './interceptors/error-api.interceptor';

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes, withComponentInputBinding()),
		provideHttpClient(withInterceptorsFromDi(), withInterceptors([ErrorApiInterceptorFn])),
		{ provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
		provideAnimationsAsync()
	]
};
