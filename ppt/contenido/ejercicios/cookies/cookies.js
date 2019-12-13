// para crear una cookie puede ejecutar
document.cookie = "menu=top"; // API nativa
Cookies.set('menu', 'top');// con librería

// puedo definir que la cookie sea específica de un path
document.cookie = "mostrar-popup=true;path=/contenido/ejercicios/cookies/cookies.html"
Cookies.set('mostrar-popup', true, {path: '/contenido/ejercicios/cookies/cookies.html'});

// Cookie con tiempo de vida
// ej. con API Nativa
let expiracion = new Date();
expiracion.setDate(expiracion.getDate()+2);
document.cookie = "mostrar-notificaciones=true;expires="+expiracion.toUTCString();
// con librería
Cookies.set('mostrar-notificaciones', true, {expires: 2});

// Borrar Cookie API Nativa
let ayer = new Date();
ayer.setDate( ayer.getDate()-1 );
// si la cookie que deseo borrar tiene un path configurado
// también debo especificarlo en este momento
document.cookie="mostrar-popup=;expires="+ayer.toUTCString();

// Con librería
Cookies.remove('mostrar-popup');
