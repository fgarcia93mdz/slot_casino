var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
function showAlert(event) {
  event.preventDefault();
  var nombre = document.getElementById('nombre').value;
  var slot = document.getElementById('slot').value;
  var message = nombre + " tu solicitud fue realizada, te buscaremos en el slot " + slot + ".";
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