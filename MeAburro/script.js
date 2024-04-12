const secciones = document.querySelectorAll('main');

// Agrega un evento 'scroll' al documento
window.addEventListener('scroll', () => {
    let posicionActual = window.scrollY;

    // Itera sobre cada sección
    secciones.forEach(seccion => {
        const seccionRect = seccion.getBoundingClientRect();

        // Verifica si la sección está visible en la ventana gráfica
        if (seccionRect.top <= 0 && seccionRect.bottom > 0) {
            // Agrega la clase 'fijado' a la sección actualmente visible
            seccion.classList.add('fijado');
        } else {
            // Quita la clase 'fijado' de las secciones que no están visibles
            seccion.classList.remove('fijado');
        }
    });
});
var timeout; // Variable para almacenar el temporizador

window.addEventListener('scroll', function() {
    var navItems = document.querySelectorAll('.nav > li > a');
    navItems.forEach(function(item) {
        var bounding = item.getBoundingClientRect();
        if (bounding.top < window.innerHeight / 2 && bounding.bottom > window.innerHeight / 2) {
            item.style.opacity = 1; // Si el elemento está en la mitad de la ventana, establece opacidad a 1
        } else {
            item.style.opacity = 0.5; // Si el elemento no está en la mitad de la ventana, establece opacidad a 0.5
        }
    });

    // Restablecer el color después de 5 segundos de inactividad
    clearTimeout(timeout); // Borrar el temporizador existente
    timeout = setTimeout(function() {
        navItems.forEach(function(item) {
            item.style.opacity = 1; // Restablecer el color a su estado original
        });
    }, 3000); // 5000 milisegundos (5 segundos)
});


function avisa() {
    location.reload();
}

var opcionesDesplazamiento = {
    behavior : 'smooth'
}

function partyWars(event) {
    // Prevenir el comportamiento predeterminado del enlace
    event.preventDefault();
    
    var contenedorSobre = document.querySelector('.introduccion');
    contenedorSobre.scrollIntoView(opcionesDesplazamiento);
}
function nuestraApp(event) {
    // Prevenir el comportamiento predeterminado del enlace
    event.preventDefault();
    
    var contenedorSobre = document.getElementById('desplegable');
    contenedorSobre.scrollIntoView(opcionesDesplazamiento);
}
function contacto(event) {
    // Prevenir el comportamiento predeterminado del enlace
    event.preventDefault();
    
    var contenedorSobre = document.getElementById('contacto');
    contenedorSobre.scrollIntoView(opcionesDesplazamiento);
}
function planBusiness(event) {
    // Prevenir el comportamiento predeterminado del enlace
    event.preventDefault();
    
    var contenedorSobre = document.querySelector('.contenido');
    contenedorSobre.scrollIntoView(opcionesDesplazamiento);
}