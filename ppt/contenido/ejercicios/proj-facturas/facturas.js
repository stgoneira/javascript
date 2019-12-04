class Factura {
    constructor(folio, proveedor, rut, strFechaIso, neto) {
        this.folio = folio;
        this.proveedor = proveedor;
        this.rut = rut;
        this.fecha = new Date(strFechaIso);
        this.neto = neto;
    }
    get iva()  {
        return this.neto * 0.19;
    }
    get total() {
        return this.neto * 1.19;
    }
    get fechaVencimiento() {
        let fechaVencimiento = new Date(this.fecha.toISOString());
        fechaVencimiento.setDate( this.fecha.getDate() + 30 );
        return fechaVencimiento;
    }
}

function test() {
    let f = new Factura(null, null, "2019-02-15", 100000);
    console.log( "IVA", f.iva );
    console.log("Total", f.total);
    console.log("F. Venc.", f.fechaVencimiento);    
}


