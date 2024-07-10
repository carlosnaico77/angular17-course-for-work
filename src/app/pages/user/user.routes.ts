import { Routes } from '@angular/router';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { UserBasicComponent } from './user-basic/user-basic.component';

// export const NameGuard: CanMatchFn = (
//   route: Route,
//   segments: UrlSegment[]
// ) => {
//   return true;
// }

const isRole = (role: string) => {
	const roleLogged = localStorage.getItem('role');
	return roleLogged === role;
};

export default [
	{
		path: '',
		canMatch: [() => isRole('admin')],
		component: UserAdminComponent
	},
	{
		path: '',
		canMatch: [() => isRole('basic')],
		component: UserBasicComponent
	}
] as Routes;
