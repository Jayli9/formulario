import { CommonModule } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
//Rutas
import { RouterModule } from '@angular/router';
//Guard
import { FormsModule } from '@angular/forms';
import localeEs from '@angular/common/locales/es';
import { IonicModule } from '@ionic/angular';
import { RUTA_FORMULARIO } from '../rutas/formulario.routing';
import { FormularioPrincipalComponent } from '../componentes/formulario-principal/formulario-principal.component';
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(RUTA_FORMULARIO),
        FormsModule,
        FormsModule,
        IonicModule,
    ],
    declarations: [
        FormularioPrincipalComponent
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'es' },
    ],
})
export class FormularioModule {
    constructor() {
        registerLocaleData(localeEs); // Registra los datos de formato para 'es'
    }
}
