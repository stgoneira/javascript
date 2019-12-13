import { Clima } from './Clima.mjs';
import {ClimaUI} from './ClimaUI.mjs';
import {PreferenciasUI} from './PreferenciasUI.mjs';


document.addEventListener('DOMContentLoaded', e => {
    let preferenciasUI = new PreferenciasUI();
    preferenciasUI.activar();
});

let localidad = document.getElementById('localidad');

localidad.addEventListener('change', e => {
    let ciudadPais = localidad.value.split(',');
    console.log( ciudadPais );
    main(ciudadPais[0], ciudadPais[1]);
});

async function main(ciudadStr, countryCodeStr) {
    let clima = new Clima(ciudadStr, countryCodeStr);
    console.log( clima.getData() );
    let ui = new ClimaUI();

    let ciudad = await clima.getCiudad();
    let countryCode = await clima.getCountryCode();
    ui.setTitulo(ciudad, countryCode);

    // temperatura
    let temp = await clima.getTemperatura();
    ui.setTemperatura( temp );
    
    // humedad
    let humedad = await clima.getHumedad();
    ui.setHumedad( humedad );
}

