document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      // Asegúrate de que el formulario todavía está en el DOM
      if (document.body.contains(event.target)) {
        // Tu código para manejar la presentación del formulario aquí
      } else {
        console.error('El formulario ha sido eliminado del DOM');
      }
    });
  } else {
    console.error('No se encontró ningún formulario en el DOM');
  }
});