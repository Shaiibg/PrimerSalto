var modal = document.getElementById("myModal"); // Reemplaza "myModal" con el ID de tu modal
var img = document.getElementById("myImg"); // Reemplaza "myImg" con el ID de tu imagen
var modalImg = document.getElementById("img01"); // Reemplaza "img01" con el ID de la imagen dentro del modal
var captionText = document.getElementById("caption"); // Reemplaza "caption" con el ID del texto del pie de foto (opcional)
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("cerrar")[0];   

span.onclick = function() { 
  modal.style.display = "none";
}

function abrirModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
  }
  
  function cerrarModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
  }
