export abstract class Producto {
    protected nombre: string;
    protected precio: number;

    constructor(nombre: string, precio: number) {
        this.nombre = nombre;
        this.precio = precio;
    }

    abstract mostrarDetalles(): void;

    public getPrecio(): number {
        return this.precio;
    }
}