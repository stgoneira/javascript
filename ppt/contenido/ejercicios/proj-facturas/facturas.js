class Factura {
    constructor(folio, proveedor, rut, strFechaIso, neto) {
        this.folio = folio;
        this.proveedor = proveedor;
        this.rut = rut;
        this.fecha = strFechaIso;
        this.neto = neto;
    }
    get iva()  {
        return Math.round(this.neto * 0.19);
    }
    get total() {
        return Math.round(this.neto * 1.19);
    }
    get fecha() {
        return this._fecha;
    }
    set fecha(fecha) {
        this._fecha = new Date(fecha); 
    }
    get fechaVencimiento() {
        let fechaVencimiento = new Date(this.fecha.toISOString());
        fechaVencimiento.setDate( this.fecha.getDate() + 30 );
        return fechaVencimiento;
    }
}

function test() {
    let f = new Factura(null, null, null, "2019-02-15", 100000);
    console.log( "IVA", f.iva );
    console.log("Total", f.total);
    console.log("F. Venc.", f.fechaVencimiento);    
}

test();
