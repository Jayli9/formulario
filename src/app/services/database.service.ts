import { Injectable, WritableSignal, signal } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

const DB_USER = 'myuserdb'
export interface Producto {
  id: number;
  descripcion: string;
  valor: number
}
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
  private db!: SQLiteDBConnection;
  private productos: WritableSignal<Producto[]> = signal<Producto[]>([]);


  constructor() { }

  async initializPlugin() {
    this.db = await this.sqlite.createConnection(
      DB_USER,
      false,
      'no-encryption',
      1,
      false
    );
    await this.db.open();
    const schema = `CREATE TABLE IF NOT EXISTS productos(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      descripcion TEXT NOT NULL,
      valor INTEGER
    )`;
    await this.db.execute(schema);
    this.loadProducts();
    return true;

  }
  getProducts(){
    return this.productos
  }
  async loadProducts() {
    const productos = await this.db.query('SELECT * FROM productos;')
    this.productos.set(productos.values || [])

  }
  async addProducts(producto: Producto) {
    const query = `INSERT INTO productos (descripcion,valor) VALUES('${producto.descripcion},${producto.valor}')`;
    const result = await this.db.query(query);

    this.loadProducts();
    return result;

  }
 

}
