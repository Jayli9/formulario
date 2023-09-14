import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../servicios/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-principal',
  templateUrl: './inicio-principal.component.html',
  styleUrls: ['./inicio-principal.component.scss'],
})
export class InicioPrincipalComponent implements OnInit {

  public listaEjemplo: any;
  constructor(private productoService: ProductoService,
    private router: Router) { }

  ngOnInit() {
    this.productoService.listarCatalogos().subscribe({
      next: (respuesta) => {
        this.listaEjemplo = respuesta['listado']
        console.log("this.listaEjemplo",this.listaEjemplo )
      },
      error: (error) => {
      }
    })
  }
  imprimirMensaje() {
    console.log("HOLAAAAA mensaje")
  }
  ingresar(){
    this.router.navigate(['pages/login']);
  }

}
