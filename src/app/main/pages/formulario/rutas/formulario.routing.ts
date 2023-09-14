import { Routes } from '@angular/router';
import { FormularioPrincipalComponent } from '../componentes/formulario-principal/formulario-principal.component';
//import { AuthGuard } from 'app/auth/helpers';

export const RUTA_FORMULARIO: Routes = [
  {
    path: 'registro',
    component: FormularioPrincipalComponent,
    // canActivate: [AuthGuard],
  }
];