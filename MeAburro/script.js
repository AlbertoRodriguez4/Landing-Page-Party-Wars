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
    
    var contenedorSobre = document.querySelector('.contenedorsobre');
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