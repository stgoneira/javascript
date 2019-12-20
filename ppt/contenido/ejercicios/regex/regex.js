"use strict";

let patron = /santiago/i;
let patron2 = /santiago/;
let patron3 = new RegExp("santiago", "i"); // lo mismo que /santiago/i

let texto = `
    Ola de calor en Santiago, temperaturas sobre los 34º.
`;

console.log( patron.test(texto) ); // true
console.log( patron2.test(texto) ); // false 
console.log( patron3.test(texto) ); // true 
