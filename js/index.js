function faltaCompletar(){
    var inputNombre = document.getElementById("txtNombre");
    var inputApellido = document.getElementById("txtApellido");
    var inputTelefono = document.getElementById("txtTelefono");
    var inputMail = document.getElementById("txtMail");
    var inputConsulta = document.getElementById("txtConsulta");
    if(inputNombre.value == ""){
        alert("Debe completar el nombre");
    }
    else if(inputApellido.value == ""){
        alert("Debe completar el apellido");
    }
    else if(inputTelefono.value == ""){
        alert("Debe completar el teléfono");
    }
    else if(inputMail.value == ""){
        alert("Debe completar el correo electrónico");
    }
    else if(inputConsulta.value == ""){
        alert("Debe completar el campo de consulta");
    }
}


/* slide */


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function mouseOverGabinete(){
    let image = document.getElementById("imgGabinete");
    image.src = "./img/producto-gabinete-mouse-over.jpg"
}
function mouseOutGabinete(){
    document.getElementById("imgGabinete").src ="./img/producto-gabinete.png"
}
function mouseOverMonitor(){
    let image = document.getElementById("imgMonitor");
    image.src = "./img/producto-monitor-mouse-over.jpg"
}
function mouseOutMonitor(){
    document.getElementById("imgMonitor").src ="./img/producto-monitor.png"
}
function mouseOverMyT(){
    let image = document.getElementById("imgTecladoMouse");
    image.src = "./img/producto-mouse-teclado-mouse-over.jpg"
}
function mouseOutMyT(){
    document.getElementById("imgTecladoMouse").src ="./img/producto-mouse teclado.jpg"
}
function mouseOverHeadset(){
    let image = document.getElementById("imgHeadset");
    image.src = "./img/producto-headset-mouse-over.jpg"
}
function mouseOutHeadset(){
    document.getElementById("imgHeadset").src ="./img/producto-headset.png"
}
