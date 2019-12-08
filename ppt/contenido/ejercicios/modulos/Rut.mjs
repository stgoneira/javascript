class Rut {
    constructor(rut, dv) {
        this.rut = rut;
        this.dv = dv;
    }

    esValido() {
        return true;
    }

    toString() {
        return `${this.rut}-${this.dv}`;
    }
}

export {Rut};