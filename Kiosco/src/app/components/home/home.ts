import { Component } from '@angular/core';
import { Productos } from '../../models/productos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  public productoss: Productos[] = [];
  constructor() {
    this.productoss = [
      {
        id: 1,
        nombre: "candy",
        precio: 1500,
        img: "#",
        alt: "candy"
      }
    ]
    this.productoss.push({
      id: 1,
      nombre: "candy",
      precio: 1500,
      img: "#",
      alt: "candy"
    })
  }
  productoSeleccionado: any = null
  verMas(producto: any) {
    this.productoSeleccionado = producto
    return this.productoss
  }
}
