"use strict"

function fila(val1, val2) {
    return `
        <td>${val1}</td>
        <td>${val2}</td>
    `;
}

console.log( fila(process.argv[2], process.argv[3]) );
