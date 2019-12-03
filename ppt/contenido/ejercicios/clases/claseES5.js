
function PersonaES5(nombre, rut) {
    this.nombre = nombre;
    this._rut = rut; // al final se checkea con setRut()
    this._dv;

    this.getRut = function() {
        return this._rut;
    };
    this.setRut = function(rut) {
        if( Number.isInteger(rut) && rut>1 ) {
            this._rut = rut;
        } else {
            console.error("El RUT debe ser numérico y mayor que 0.");
        }
    };
    this.getDv = function() {
        if(this._dv == undefined) { 
            this._dv = this.calcularDv();
        } 
        return this._dv;
    }
    this.calcularDv = function() {
        return 'k'; // aca se debiese calcular el dígito verificador
    };
    this.format = function() {
        const formatRut = this.getRut().toLocaleString("es-CL");
        const formatDv = this.getDv().toUpperCase(); 
        return `${this.nombre} ${formatRut}-${formatDv}`;
    }

    // checks 
    this.setRut(rut);
}


let p = new PersonaES5('Gonzalo Blumel', 14493043);
console.log(p.format());