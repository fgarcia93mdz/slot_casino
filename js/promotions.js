document.querySelectorAll('.button').forEach(function (button) {
  button.addEventListener('click', function (event) {
    event.preventDefault();
    var formContainer = document.getElementById('formContainer');
    formContainer.style.display = 'block';
    var modal = document.createElement('div');
    modal.style.width = '370px';
    modal.style.height = '300px';
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.background = '#fff';
    modal.style.padding = '20px';
    modal.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.1)';
    modal.style.border = '2px solid rgb(142 150 255';
    modal.style.boxShadow = '2px 2px 15px #000000 inset'
    modal.appendChild(formContainer);
    
    document.body.appendChild(modal);
    document.getElementById('cancelButton').addEventListener('click', function () {
      var formContainer = document.getElementById('formContainer');
      formContainer.style.display = 'none';
      document.body.removeChild(modal);

    });
  });
  
});



document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('promotionForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var code = Math.random().toString(36).substring(2, 10);
    toastr.success('SU CÓDIGO ES: ' + code.toUpperCase(), '', {
      timeOut: 5000,
      closeButton: true,
      progressBar: true,
      positionClass: "toast-top-center",
      preventDuplicates: true,
      newestOnTop: false,
      showDuration: "500",
      hideDuration: "1000",
      extendedTimeOut: "1000",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut",
      onclick: null,
      style: {
        color: 'black',
        'background-color': '#f0f0f0'
      }
    });
    document.body.removeChild(modal);
  });
});