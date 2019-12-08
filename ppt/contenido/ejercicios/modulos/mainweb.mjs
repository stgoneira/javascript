import {Persona} from './Persona.mjs';
import { Rut } from './Rut.mjs';

document.addEventListener('DOMContentLoaded', e => {
    let rut = new Rut(12345678, 5);
    let nombre = 'Juan Delgado';
    let edad = 31;
    let p = new Persona(nombre, edad, rut);
    console.log( p.presentarse() );
});
