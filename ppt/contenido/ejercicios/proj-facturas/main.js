document.addEventListener("DOMContentLoaded", function(eventLoad){
    
    let ui = new FacturaUI();
    
    ui.fecha.addEventListener('blur', e => {
        let factura = new Factura();
        factura.fecha = ui.fecha.value;
        ui.fechaVencimiento.value = factura.fechaVencimiento.toISOString().slice(0, 10);
    });

    ui.neto.addEventListener('blur', e => {
        let factura = new Factura();
        factura.neto = parseInt( ui.neto.value );
        ui.iva.value = factura.iva;
        ui.total.value = factura.total;
    });

    ui.botonGuardar.addEventListener('click', e => {
        let folio = ui.folio.value;
        let proveedor = ui.proveedor.value;
        let rut = ui.rut.value;
        let strFechaIso = ui.fecha.value;
        let neto = ui.neto.value;
        let factura = new Factura(folio, proveedor, rut, strFechaIso, neto);
        let row = ui.generateRow(factura);
        ui.appendRow(row);
        console.log(factura);
    });

});