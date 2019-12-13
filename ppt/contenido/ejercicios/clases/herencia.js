class Vehiculo {
    constructor(nombre) {
        this.nombre = nombre;
    }

    andar() {
        console.error('No se puede instanciar');
    }
}

class Automovil extends Vehiculo {
    constructor() {
        super('BMW');
    }

    andar() {
        console.log(`${this.nombre}: sonido de auto`);
    }
}

class Moto extends Vehiculo {
    constructor() {
        super('Yahama');
    }

    andar() {
        console.log(`${this.nombre}: sonido de moto`);
    }
}

let vehiculo = new Vehiculo('asdf');
let auto = new Automovil();
let moto = new Moto();

let arr = [vehiculo, auto, moto];
arr.forEach(v => v.andar());