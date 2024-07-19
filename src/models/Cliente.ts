export class Cliente {
    getEmail() {
        throw new Error('Method not implemented.');
    }
    private nombre: string;
    public email: string;

    constructor(nombre: string, email: string) {
        this.nombre = nombre;
        this.email = email;
    }
}