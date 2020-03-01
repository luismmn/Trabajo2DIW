// UTILIDAD DE VISIBILIDAD - Mediante jQuery se modifica la clase de las tablas para indicar si son visibles o no son visibles
$("#topsmazos").addClass("invisible");
$("#topscartas").addClass("visible");

$("#pagina1").show();
$("#pagina2").hide();

$("#pocartas").click(function() {
   $("#topsmazos").removeClass("visible");
   $("#topsmazos").addClass("invisible");
   $("#topscartas").removeClass("invisible");
   $("#topscartas").addClass("visible");
});

$("#pormazos").click(function() {
	$("#topsmazos").removeClass("invisible");
	$("#topsmazos").addClass("visible");
	$("#topscartas").removeClass("visible");
	$("#topscartas").addClass("invisible");
});


$('[data-toggle="tooltip"]').tooltip();

$(function () {
  $('[data-toggle="popover"]').popover()
})

$('#formRegistro').on('submit', function(e){
  $('#myModal').modal('show');
  e.preventDefault();
});

$("#botonpg1").click(function() {
	$("#pagina1").show();
	$("#pagina2").hide();
});

$("#botonpg2").click(function() {
	$("#pagina1").hide();
	$("#pagina2").show();
});

$('body').scrollspy({
    target: '#list-example'
});

(function() {
'use strict';
window.addEventListener('load', function() {
// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.getElementsByClassName('needs-validation');
// Loop over them and prevent submission
var validation = Array.prototype.filter.call(forms, function(form) {
form.addEventListener('submit', function(event) {
if (form.checkValidity() === false) {
event.preventDefault();
event.stopPropagation();
}
form.classList.add('was-validated');
}, false);
});
}, false);
})();