import { Producto } from './Producto';

export class Pastel extends Producto {
    private sabor: string;

    constructor(nombre: string, precio: number, sabor: string) {
        super(nombre, precio);
        this.sabor = sabor;
    }

    public mostrarDetalles(): void {
        console.log(`Pastel: ${this.nombre}, Precio: ${this.precio}, Sabor: ${this.sabor}`);
    }
}