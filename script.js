document.addEventListener("DOMContentLoaded", function () {
    var opcionSoyUsuario = document.querySelector('.option:first-child'); // Obtener la primera opción
    selectOption(opcionSoyUsuario);
        onload(); // Llama a onload cuando se carga la págin
});
function selectOption(option) {
    var options = document.querySelectorAll('.option');
    options.forEach(function (opt) {
        opt.classList.remove('selected');
        opt.style.color = '#888888';
        opt.style.borderBottom = '2px solid #888888';
    });
    option.classList.add('selected');
    option.style.color = 'rgba(140, 201, 9, 255)';
    option.style.borderBottom = '2px solid rgba(140, 201, 9, 255)';
    if (option.innerHTML === "Soy usuario") {
        document.getElementById("contenido").innerHTML = '';
        mostrarContenidoSoySocio();
    } else {
        cambiarContenido();
    }
}
function cambiarContenido() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "altLogin.html", true);
    xhr.onload = function () {
        if (xhr.status == 200) {
            document.getElementById("contenido").innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}
function mostrarContenidoSoySocio() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "login.html", true);
    xhr.onload = function () {
        if (xhr.status == 200) {
            document.getElementById("contenido").innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}
let slideIndex = 0;

function onload() {
    showSlide(0);
}

function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

function changeSlide(n) {
    slideIndex += n;
    showSlide(slideIndex);
}

setInterval(() => changeSlide(1), 3000);