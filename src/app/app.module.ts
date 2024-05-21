import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppComponent } from './app.component';
import { RoutingModule } from './app.routing.module';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { DemoInterceptor } from './interceptors/demo.interceptor';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, RoutingModule],
	bootstrap: [AppComponent],
	providers: [
		provideAnimationsAsync(),
		{ provide: HTTP_INTERCEPTORS, useClass: DemoInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
	]
})
export class AppModule {}
