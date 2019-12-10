export class ClimaUI {
    constructor() {
        let g = (id) => document.getElementById(id); 
        this.localidad = g('localidad');
        this.temperatura = g('temperatura');
        this.humedad = g('humedad');
        this.titulo = g('titulo');
    }

    setTitulo(city, countryCode) {
        this.titulo.innerHTML = `El tiempo ahora en ${city}, ${countryCode}`;
    }

    setTemperatura(temp) {
        this.temperatura.innerHTML = `${temp}º`;
    }

    setHumedad(humedad) {
        this.humedad.innerHTML = `Humedad: ${humedad}%`;
    }
}