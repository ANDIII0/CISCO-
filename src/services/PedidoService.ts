import { Pedido } from '../models/Pedido';
import { Cliente } from '../models/Cliente';

export class PedidoService {
    private pedidos: Pedido[] = [];

    public crearPedido(cliente: Cliente): Pedido {
        const nuevoPedido = new Pedido(cliente);
        this.pedidos.push(nuevoPedido);
        return nuevoPedido;
    }

    public obtenerPedidos(): Pedido[] {
        return this.pedidos;
    }
}
