class Factura { 
    constructor( rut, fecha, neto ) {
        this.rut = rut;
        this.fecha = fecha;
        this.neto = neto;
    }
    get iva() {
        return this.calcularIva();
    }
    get total() {
        return this.calcularTotal();
    }
    calcularIva() {
        return Math.round( this.neto * 0.19 );
    }
    calcularTotal() {
        return Math.round( this.neto * 1.19 );
    }
    toString() {
        return `RUT: ${this.rut} NETO: ${this.neto} IVA: ${this.iva} TOTAL: ${this.total}`;
    }
}

//let f = new Factura(null, null, 100);
//console.log( f.toString() );

class Persona {
    constructor(nombre, rut) {
        this.nombre = nombre;
        this.rut = rut;
        this._dv;
    }
    get rut() {
        return this._rut;
    }
    set rut(rut) {
        if( Number.isInteger(rut) && rut>1 ) {
            this._rut = rut;
        } else {
            console.error("El RUT debe ser numérico y mayor que 0.");
        }
    }
    get dv() {
        if(this._dv == undefined) { 
            this._dv = this.calcularDv();
        } 
        return this._dv;
    }
    calcularDv() {
        return 'k'; // aca se debiese calcular el dígito verificador
    }
    format() {
        const formatRut = this.rut.toLocaleString("es-CL");
        const formatDv = this.dv.toUpperCase(); 
        return `${this.nombre} ${formatRut}-${formatDv}`;
    }
}

let rut = new Persona('Gonzalo Blumel', 14493043);
console.log(rut.format());