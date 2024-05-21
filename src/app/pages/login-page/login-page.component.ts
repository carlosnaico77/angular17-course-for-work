import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { AuthApiService } from '../../services/api/auth-api.service';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
	private readonly _formBuilder = inject(NonNullableFormBuilder);
	private readonly _authApiService = inject(AuthApiService);

	form = this._formBuilder.group({
		username: ['mor_2314', Validators.required],
		password: ['83r5^_', Validators.required]
	});

	clickSingUp(): void {
		this._authApiService.login(this.form.getRawValue()).subscribe({
			next: (response) => {
				localStorage.setItem('token', response.token);
			},
			error: (err) => console.log('ERROR CONTROLADO DESDE EL COMPONENTE ', err)
		});
	}
}
