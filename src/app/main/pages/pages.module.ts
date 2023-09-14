import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InicioModule } from './inicio/modulos/inicio.module';
import { FormularioModule } from './formulario/modulos/formulario.module';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    InicioModule,
    FormularioModule,
  ],

  providers: []
})
export class PagesModule { }
