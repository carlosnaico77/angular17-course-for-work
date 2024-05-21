import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { ExitGuardFn } from '../../guards/exit.guard';
import { RegisterPageComponent } from './register-page.component';

const routes: Routes = [{ path: '', component: RegisterPageComponent, canDeactivate: [ExitGuardFn] }];

@NgModule({
	declarations: [RegisterPageComponent],
	imports: [
		RouterModule.forChild(routes),
		MatCardModule,
		RouterLink,
		MatInput,
		MatFormFieldModule,
		MatIcon,
		MatButton,
		ReactiveFormsModule
	]
})
export class RegisterPageModule {}
