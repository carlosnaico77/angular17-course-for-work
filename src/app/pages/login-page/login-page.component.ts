import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApiService } from '../../services/api/auth-api.service';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
	private readonly _router = inject(Router);
	private readonly _authApiService = inject(AuthApiService);
	private readonly _formBuilder = inject(NonNullableFormBuilder);

	form = this._formBuilder.group({
		username: ['mor_2314', Validators.required],
		password: ['83r5^_', Validators.required]
	});

	constructor() {
		console.log('**********LoginPageComponent**********');
	}

	clickSingUp(): void {
		this._authApiService.login(this.form.getRawValue()).subscribe((response) => {
			localStorage.setItem('token', response.token);
			localStorage.setItem('role', 'admin');
			this._router.navigateByUrl('/');
		});
	}
}
