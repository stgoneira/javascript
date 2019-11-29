function validar() {
    let inputPassword = document.getElementById("input-password");
    let password = inputPassword.value;
    let largoPassword = password.length;
    console.log("Largo de la password es de ", largoPassword);

    if( largoPassword < 6 ) {
        // password demasiado corta
        inputPassword.style.cssText = "background-color: red;";
    } else {
        inputPassword.style.cssText = "background-color: green;";
    }
}