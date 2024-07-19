// src/index.ts
import { Pastel } from './models/Pastel';
import { Cliente } from './models/Cliente';
import { Pedido } from './models/Pedido';

// Crear productos
const pastel1 = new Pastel('Pastel de Chocolate', 200, 'Chocolate');

// Crear cliente
const cliente1 = new Cliente('Juan Pérez', 'juan@example.com');

// Crear pedido
const pedido1 = new Pedido(cliente1);
pedido1.agregarProducto(pastel1);

// Mostrar resumen del pedido
pedido1.mostrarResumen();
