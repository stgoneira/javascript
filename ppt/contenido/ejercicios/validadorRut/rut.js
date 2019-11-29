function calcularDv(rut) {
    console.log("Parámetro original RUT", rut);
    
    // convierte el rut a un array de strings
    let aRut = rut.split("");
    console.log("RUT convertido a array", aRut);

    // invierte el orden del array
    let rRut = aRut.reverse();
    console.log("Array con orden inverso", rRut);

    // según el algoritmo para calcular el DV
    // se utiliza la siguiente serie para multiplicar
    let arrMul = [2, 3, 4, 5, 6, 7];
    // sintaxis para copiar rápidamente un array
    let arrMulCopy = [...arrMul]; 
    console.log("Array copiado", arrMulCopy);
    
    // recorremos y sumamos las multiplicaciones
    let suma = 0;
    for (let n in rRut) {
        let mul = rRut[n];
        if( arrMulCopy.length == 0 ) {
            arrMulCopy = [...arrMul];
        }
        suma += arrMulCopy.shift() * mul;
    }
    let modulo = suma % 11;
    let resultado = 11 - modulo;
    if( resultado == 10 ) {
        return "k";
    } else if( resultado == 11 ) {
        return 0;
    }
    return resultado;
}

let rut = process.argv[2];
let dv = calcularDv(rut);
console.log("RUT", rut, "-", dv);