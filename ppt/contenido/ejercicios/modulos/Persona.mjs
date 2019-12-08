import { Rut } from './Rut.mjs';

export class Persona {
    constructor(nombre, edad, rut) {
        this.nombre = nombre;
        this.edad = edad;
        if(rut.esValido()) {
            this.rut = rut;
        }        
    }

    presentarse() {
        return `Hola soy ${this.nombre}, mi RUT es ${this.rut} y tengo ${this.edad} años!`;
    }
}
