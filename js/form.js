document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      if (document.body.contains(event.target)) {

      } else {
        console.error('El formulario ha sido eliminado del DOM');
      }
    });
  } else {
    console.error('No se encontró ningún formulario en el DOM');
  }
});