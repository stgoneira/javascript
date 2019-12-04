document.addEventListener("DOMContentLoaded", function(eventLoad){
    console.log("DOM Cargado");
    const btnGuardar = document.getElementById("btn-guardar");
    
    // pueden existir varias funciones esperando el evento para ser gatilladas
    btnGuardar.addEventListener("click", function(eventClick){
        btnGuardar.textContent = "Guardando ...";
        btnGuardar.disabled = true;
    });
    btnGuardar.addEventListener("click", function(eventClick){
        console.log("click click");
    });

    

});