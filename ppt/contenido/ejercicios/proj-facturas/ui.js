class FacturaUI {
    constructor() {
        let g = id => document.getElementById(id);

        this.botonGuardar = g("btn-guardar");
        this.folio = g("folio");
        this.proveedor = g("proveedor");
        this.rut = g("rut");
        this.fecha = g("fecha");
        this.fechaVencimiento = g("fecha-vencimiento");
        this.neto = g("neto");
        this.iva = g("iva");
        this.total = g("total");
    }

    crearBotonRemover() {
        let btn = document.createElement('a');
        btn.className = "remover";
        btn.href = "#";
        btn.textContent = "X";
        return btn;
    }

    generateRow(factura) {
        let row = document.createElement('tr');
        let btnRemover = this.crearBotonRemover();
        let tds = `
            <td>${factura.folio}</td>
            <td>${factura.proveedor}</td>
            <td>${factura.fecha.toISOString().slice(0,10)}</td>
            <td>${factura.fechaVencimiento.toISOString().slice(0,10)}</td>
            <td>${factura.neto}</td>
            <td>${factura.iva}</td>
            <td>${factura.total}</td>
            <td>${btnRemover.outerHTML}</td>
        `;
        row.innerHTML = tds;
        return row;
    }

    appendRow(row){
        let tableBody = document.querySelector("table#tabla-facturas tbody");
        tableBody.append(row);
        let fnRemove = (e) => {
            console.log("boton remover");
            console.log( e.target.parentElement.parentElement );
            e.target.parentElement.parentElement.remove();
        };
        document.querySelectorAll('table a.remover').forEach(val => {
            val.onclick = fnRemove;
        });
    }
}