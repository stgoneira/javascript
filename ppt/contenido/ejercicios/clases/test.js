class Factura {
    constructor(proveedor, fecha, neto) {
        this.proveedor = proveedor;
        this.fecha = fecha;
        this.neto = neto;
    }
    set fecha(f) {
        this._fecha = new Date(f);
    }
    get fecha() {
        return this._fecha;
    }
    get iva() {
        return this.neto * 0.19;
    }
    get total() {
        return this.neto * 1.19;
    }
    mostrarResumen() {
        let fecha = this.fecha.toLocaleDateString();
        console.log(`${this.proveedor} | ${fecha} | NETO: ${this.neto} IVA: ${this.iva} TOTAL: ${this.total}`);
    }
}
let f = new Factura('Huawei', '2019-12-03', 100000);
f.mostrarResumen();