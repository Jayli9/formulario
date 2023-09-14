import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { SplashScreen } from '@capacitor/splash-screen';
import { Storage } from '@ionic/storage-angular';
import { Iproducto } from '../../interfaces/Iproducto';
import { Router } from '@angular/router';
@Component({
  selector: 'app-formulario-principal',
  templateUrl: './formulario-principal.component.html',
  styleUrls: ['./formulario-principal.component.scss'],
})

export class FormularioPrincipalComponent implements OnInit {
  //listas
  public listaProducto: Iproducto[] = [];
  //objetos
  public producto: Iproducto;
  // productos = this.databaseService.getProducts();
  // newUserName='';
  constructor(private databaseService: DatabaseService,
    private storage: Storage,
    private router: Router) {
    this.producto = {}
  }

  async ngOnInit() {
    // await this.databaseService.initializPlugin();
    // SplashScreen.hide();
    this.listarDatos()
  }


  async guardarDatos(productoDTO: Iproducto) {
    this.listaProducto.push(productoDTO)
    await this.storage.set('listaProducto', JSON.stringify(this.listaProducto));
  }
  async listarDatos() {
    this.listaProducto = JSON.parse(await this.storage.get('listaProducto'));
    if (this.listaProducto == null) {
      this.listaProducto = []
    }
    console.log("listaProducto", this.listaProducto);

  }
  async listarDatosTodos() {
    const llaves = await this.storage.keys()
    console.log("llaves", llaves);
    // await this.storage.remove("name");
  }

  async tamanoDatos() {
    const tamano = await this.storage.length();
    console.log("tamano", tamano);

  }
  async limpiarLista() {
    await this.storage.clear();
  }

  logout(){
    this.router.navigate(['pages/login']);
  }
}
