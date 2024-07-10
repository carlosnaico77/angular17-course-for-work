import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withComponentInputBinding, withHashLocation } from '@angular/router';
import routes from './app.routes';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { DemoInterceptor } from './interceptors/demo.interceptor';
import { ErrorApiInterceptor } from './interceptors/error-api.interceptor';

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes, withComponentInputBinding(), withHashLocation()),
		provideHttpClient(withInterceptorsFromDi(), withInterceptors([ErrorApiInterceptor])),
		provideAnimationsAsync(),
		{ provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: DemoInterceptor, multi: true }
	]
};
