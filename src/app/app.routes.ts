import { Routes } from '@angular/router';
import { AuthGuardFn } from './guards/auth.guard';
import { ExitGuardFn } from './guards/exit.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsResolverService } from './services/products.resolver';

// const isRole = (role: string) => {
// 	const roleLogged = localStorage.getItem('role');
// 	return roleLogged === role;
// };

export default [
  { path: 'home', title: 'Home', component: HomePageComponent },
  {
    path: 'login',
    title: 'Inicio de sesión',
    loadChildren: () =>
      import('./pages/login-page/login-page.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    title: 'Registro',
    canDeactivate: [ExitGuardFn],
    loadComponent: () =>
      import('./pages/register-page/register-page.component'),
  },
  {
    path: 'payment/:user',
    data: { title: 'Pagos' },
    canActivate: [AuthGuardFn],
    resolve: { products: ProductsResolverService },
    loadChildren: () =>
      import('./pages/payment-page/payment.routes').then(
        (r) => r.PaymentRoutes,
      ),
  },
  {
    path: 'user',
    title: 'Usuario',
    loadChildren: () => import('./pages/user/user.routes'),
  },

  // {
  // 	path: 'user',
  // 	title: 'Usuario',
  // 	children: [
  // 		{
  // 			path: '',
  // 			canMatch: [() => isRole('admin')],
  // 			component: UserAdminComponent
  // 		},
  // 		{
  // 			path: '',
  // 			canMatch: [() => isRole('basic')],
  // 			component: UserBasicComponent
  // 		}
  // 	]
  // },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', redirectTo: '/login', pathMatch: 'prefix' },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found-page/not-found-page.component'),
  },
] as Routes;
