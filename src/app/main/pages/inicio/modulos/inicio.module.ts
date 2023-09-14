import { CommonModule } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
//Rutas
import { RouterModule } from '@angular/router';
//Guard
import { FormsModule } from '@angular/forms';
import localeEs from '@angular/common/locales/es';
import { InicioPrincipalComponent } from '../componentes/inicio-principal/inicio-principal.component';
import { RUTA_INICIO } from '../rutas/inicio.routing';
import { IonicModule } from '@ionic/angular';
import { LoginPrincipalComponent } from '../componentes/login-principal/login-principal.component';
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(RUTA_INICIO),
        FormsModule,
        FormsModule,
        IonicModule,
    ],
    declarations: [
       InicioPrincipalComponent,
       LoginPrincipalComponent

    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'es' }, 
    ],
})
export class InicioModule {
    constructor() {
        registerLocaleData(localeEs); // Registra los datos de formato para 'es'
      }
 }
