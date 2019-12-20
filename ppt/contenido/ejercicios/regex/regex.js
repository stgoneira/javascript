"use strict";

let patron = /[S]\w+/ig;

let texto = `Santiago vive en Santiago, Chile.`;

console.log( texto.match(patron) ); // ['Santiago', 'Santiago']


