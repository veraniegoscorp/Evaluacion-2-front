// 1. Creamos la lista de tus cafés (las rutas que ya tienes)
// Tu lista de rutas de archivos
const imagenes = [
    "../resources/cafes/cafe expresso.png",
    "../resources/cafes/cafe2.png",
    "../resources/cafes/Captura de pantalla 2026-05-13 125055.png"
];

let i = 0; // El índice que recorre la lista
const visor = document.getElementById('visor');

document.getElementById('next').onclick = function() {
    i++;
    if (i >= imagenes.length) i = 0; // Vuelve al inicio
    visor.src = imagenes[i];
};

document.getElementById('prev').onclick = function() {
    i--;
    if (i < 0) i = imagenes.length - 1; // Va al final
    visor.src = imagenes[i];
};
