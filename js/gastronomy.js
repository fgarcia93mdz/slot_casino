var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
function showAlert(event) {
  event.preventDefault();
  var nombre = document.getElementById('nombre').value;
  var telefono = document.getElementById('telefono').value;
  var slot = document.getElementById('slot').value;
  var message = nombre + " tu pedido fue realizado con éxito, te buscaremos en el slot " + slot + ".              Te pedimos que no te muevas por favor. ";
  document.getElementById('alert-message').textContent = message;
  var alertBox = document.querySelector('.alert-box');
  alertBox.style.visibility = 'visible';
  alertBox.style.opacity = '1';
}

function closeAlert() {
  var alertBox = document.querySelector('.alert-box');
  alertBox.style.visibility = 'hidden';
  alertBox.style.opacity = '0';
}

window.onload = function () {
  var priceElements = document.querySelectorAll('.badge');
  var comidasAlPasoElements = document.querySelectorAll('#takeAndWay .list-group-item');
  var platosElaboradosElements = document.querySelectorAll('#elaborateDish .list-group-item');
  var cervezasElements = document.querySelectorAll('#beer .list-group-item');
  var aperitivosElements = document.querySelectorAll('#appetizer .list-group-item');

  var comidasAlPaso = ['Bruschetta', 'Calamares Fritos', 'Pan con Ajo', 'Aros de Cebolla', 'Papas con Queso', 'Tacos de Pescado', 'Hot Dogs'];
  var platosElaborados = ['Espaguetis a la Boloñesa', 'Pizza Margherita', 'Pollo Parmesano', 'Lasaña', 'Salmón a la Parrilla', 'Filete Wellington', 'Paella Vegetariana'];
  var cervezas = ['Corona', 'Heineken', 'Budweiser', 'Guinness', 'IPA', 'Stella Artois', 'Blue Moon', 'Modelo'];
  var aperitivos = ['Nachos', 'Alitas', 'Palitos de Mozarella', 'Dip de Espinacas y Alcachofas', 'Cóctel de Camarones', 'Champiñones Rellenos', 'Tabla de Bruschettas'];

  assignRandomItems(comidasAlPasoElements, comidasAlPaso);
  assignRandomItems(platosElaboradosElements, platosElaborados);
  assignRandomItems(cervezasElements, cervezas);
  assignRandomItems(aperitivosElements, aperitivos);

  for (var i = 0; i < priceElements.length; i++) {
    var randomPrice = (Math.random() * 1000 + 150).toFixed(2);
    priceElements[i].textContent = "$" + randomPrice;
  }
};

function assignRandomItems(elements, items) {
  for (var i = 0; i < elements.length; i++) {
    var randomItem = items[Math.floor(Math.random() * items.length)];
    elements[i].firstChild.textContent = randomItem;
  }
}
