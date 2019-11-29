function sumar() {
    let p1 = document.getElementById("p1").value;
    let p2 = document.getElementById("p2").value;
    
    p1 = parseInt(p1);
    console.log("p1", p1);
    p2 = parseInt(p2);
    console.log("p2", p2);
    let resultado = p1 + p2;

    
    document.getElementById("resultado").value = resultado;

    return false;
}
