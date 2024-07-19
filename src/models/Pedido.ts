import { Cliente } from './Cliente';
import { Producto } from './Producto';

export class Pedido {
    private cliente: Cliente;
    private productos: Producto[];

    constructor(cliente: Cliente) {
        this.cliente = cliente;
        this.productos = [];
    }

    public agregarProducto(producto: Producto): void {
        this.productos.push(producto);
    }

    public mostrarResumen(): void {
        console.log(`Pedido para: ${this.cliente.email}`);
        this.productos.forEach(producto => producto.mostrarDetalles());
    }
}