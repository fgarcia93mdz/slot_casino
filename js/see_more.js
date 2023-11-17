document.getElementById('toggleButton').addEventListener('click', function (event) {
  event.preventDefault();
  var content = document.getElementById('extraContent');
  var promotion = document.querySelector('.promotion');
  if (content.style.display === 'none') {
    content.style.display = 'block';
    promotion.style.height = 'auto'; // expande el contenedor
    event.target.textContent = 'Ver menos';
  } else {
    content.style.display = 'none';
    promotion.style.height = 'initial'; // contrae el contenedor
    event.target.textContent = 'Ver más';
  }
});

document.getElementById('toggleButton').addEventListener('click', function (event) {
  event.preventDefault();
  var content = document.getElementById('extraContent');
  var promotion = document.querySelector('.promotion_second');
  if (content.style.display === 'none') {
    content.style.display = 'block';
    promotion.style.height = 'auto'; // expande el contenedor
    event.target.textContent = 'Ver menos';
  } else {
    content.style.display = 'none';
    promotion.style.height = 'initial'; // contrae el contenedor
    event.target.textContent = 'Ver más';
  }
});