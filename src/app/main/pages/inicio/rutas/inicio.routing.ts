import { Routes } from '@angular/router';
//import { AuthGuard } from 'app/auth/helpers';
import { InicioPrincipalComponent } from '../componentes/inicio-principal/inicio-principal.component';
import { LoginPrincipalComponent } from '../componentes/login-principal/login-principal.component';

export const RUTA_INICIO: Routes = [
  {
    path: 'inicio',
    component: InicioPrincipalComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginPrincipalComponent,
    // canActivate: [AuthGuard],
  }
];