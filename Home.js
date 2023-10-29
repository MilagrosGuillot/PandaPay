
$(document).ready(function () {
    cargarPagina("inicio");
    iniciarIntervalo();
    
});
var tablaInicio = [
    {
        fecha: "2023-09-01",
        aprobadas: "20/25",
        total: 1000.00
    },
    {
        fecha: "2023-08-06",
        aprobadas: "10/25",
        total: 900.00
    },
    {
        fecha: "2023-09-01",
        aprobadas: "20/25",
        total: 1000.00
    },
    {
        fecha: "2023-08-06",
        aprobadas: "10/25",
        total: 900.00
    },
    {
        fecha: "2022-12-24",
        aprobadas: "20/25",
        total: 1000.00
    },
    {
        fecha: "2023-09-01",
        aprobadas: "20/25",
        total: 1000.00
    },
    {
        fecha: "2023-08-06",
        aprobadas: "10/25",
        total: 900.00
    },
    {
        fecha: "2022-12-24",
        aprobadas: "20/25",
        total: 1000.00
    },
    {
        fecha: "2023-09-01",
        aprobadas: "20/25",
        total: 1000.00
    },
    {
        fecha: "2023-08-06",
        aprobadas: "10/25",
        total: 900.00
    }
];


function ventasInicio() {

    if ($("#ListaInicio").html()) {
        $("#ListaInicio").empty();
        for (let index = 0; index < tablaInicio.length; index++) {
            var tr = $("<tr>");
            var tdFecha = $("<td>");
            var tdAprobados = $("<td>");
            var tdTotal = $("<td>");
            tdFecha.text(tablaInicio[index].fecha);
            tdAprobados.text(tablaInicio[index].aprobadas);
            tdTotal.text("$ " +tablaInicio[index].total);
            tr.classList="InicioTr";
            tr.append(tdFecha);
            tr.append(tdAprobados);
            tr.append(tdTotal);

            $("#ListaInicio").append(tr);
        }

        $("#ListaInicio").html();
        reiniciarIntervalo();
    }
}
document.addEventListener('DOMContentLoaded', function () {
    iniciarIntervalo();
});


var miIntervalo;
function iniciarIntervalo() {
    miIntervalo = setInterval(function () {
        CargarTablaDinero();
        actualizarFechaYHora();
        ventasInicio();
    }, 100); 
}

function reiniciarIntervalo() {
    clearInterval(miIntervalo); 
}



var tabla = [
    { fecha: "2023-09-29", destino: "Destino 1", cvu: "CVU12345", referencia: "Referencia 1", monto: "$100", sts: "STS1", borrar: "Borrar", rec: "Rec" },
    { fecha: "2023-09-30", destino: "Destino 2", cvu: "CVU67890", referencia: "Referencia 2", monto: "$50", sts: "STS2", borrar: "Borrar", rec: "Rec" }
];
function CargarTablaDinero() {

    if ($("#tbbodydinero").html()) {
        $("#tbbodydinero").empty();

        var tr = $("<tr>");
        for (let index = 0; index < tabla.length; index++) {
            var tr = $("<tr>");
            var tdFecha = $("<td>");
            var tdDestino = $("<td>");
            var tdCVU = $("<td>");
            var tdReferencia = $("<td>");
            var tdMonto = $("<td>");
            var tdSTS = $("<td>");
            var tdBorrar = $("<td>");
            var tdRec = $("<td>");

            tdFecha.text(tabla[index].fecha);
            tdDestino.text(tabla[index].destino);
            tdCVU.text(tabla[index].cvu);
            tdReferencia.text(tabla[index].referencia);
            tdMonto.text(tabla[index].monto);
            tdSTS.text(tabla[index].sts);
            tdBorrar.text(tabla[index].borrar);
            tdRec.text(tabla[index].rec);
            tr.append(tdFecha);
            tr.append(tdDestino);
            tr.append(tdCVU);
            tr.append(tdReferencia);
            tr.append(tdMonto);
            tr.append(tdSTS);
            tr.append(tdBorrar);
            tr.append(tdRec);

            $("#tbbodydinero").append(tr);
        }


        $("#tbbodydinero").html();
        reiniciarIntervalo();
    }
}

function Abrir() {
    var boton = event.target.parentNode;

    var valorOnclick = boton.getAttribute('value');
    var string = valorOnclick;
    var nombrePagina = "";
    switch (string) {
        case "Inici":
            nombrePagina = "inicio";
            document.getElementById("inicioicon").click();

            break;
        case "Venta":
            document.getElementById("ventasicon").click();

            nombrePagina = "ventas";
            break;
        case "Vento":
            document.getElementById("totalicon").click();

            nombrePagina = "ventasTotal";
            break;
        case "Liqui":
            document.getElementById("liquiicon").click();

            nombrePagina = "liquidacion";
            break;
        case "Compr":
            document.getElementById("comproicon").click();


            nombrePagina = "comprobante";
            break;
        case "Envdi":
            document.getElementById("enviaricon").click();

            nombrePagina = "enviarDinero";
            break;
        case "Pagse":
            document.getElementById("pagseicon").click();

            nombrePagina = "pagoDeServicios";
            break;
        return; 
        default:
            nombrePagina = "inicio";
            return;
    }

    document.getElementById("content").innerHTML = '';
    cargarPagina(nombrePagina);
}
var botonActivo = null;
function selectOption(button) {
    if (botonActivo) {
        var activeImage = botonActivo.getAttribute('data-inactive-image');
        var icon = botonActivo.querySelector('.menu-icon');
        icon.src = activeImage;
    }
    var activeImage = button.getAttribute('data-active-image');
    var icon = button.querySelector('.menu-icon');
    icon.src = activeImage;
    botonActivo = button;

    var nombrePagina = "";
    switch (button.textContent.trim()) {
        case "Inicio":
            nombrePagina = "inicio";
            break;
        case "Ventas":
            nombrePagina = "ventas";
            
            break;
        case "Ventas/Total":
            nombrePagina = "ventasTotal";
            break;
        case "Liquidación":
            nombrePagina = "liquidacion";
            break;
        case "Comprobantes":
            nombrePagina = "comprobante";
            break;
        case "Enviar Dinero":
            nombrePagina = "enviarDinero";
            break;
        case "Pago de Servicios":
            nombrePagina = "pagoDeServicios";
            break;
        case "Cambiar Contraseña":
            nombrePagina = "cambiarContraseña";
            break;
        case "Salir":
            alert("Saliste");
            return;
        default:
            nombrePagina = "inicio";
            break;
    }

    cargarPagina(nombrePagina);
}

function cargarPagina(nombrePagina) {

    if(nombrePagina=="inicio"){
        document.getElementById("inicioicon").click();
    }
    $.ajax({
        type: "GET",
        url: nombrePagina + ".html",
        success: function (data) {
            $("#content").html(data);
        },
        error: function () {
            alert("Error al cargar la página.");
        }
    });
}

function abrirPagina() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "añadirContacto.html", true);
    xhr.onload = function () {
        if (xhr.status == 200) {
            document.getElementById("content").innerHTML = xhr.responseText;
        }
    };
    xhr.send();

}

function toggleNightMode(event) {
    event.preventDefault();
    var thirdLink = document.querySelector(".nav-icon a:nth-child(3)");
    var nightModeIcon = thirdLink.querySelector(".nav-icons-img");
    if (nightModeIcon) {
        var currentImageSrc = nightModeIcon.src;
        if (currentImageSrc.includes("luna.png")) {
            nightModeIcon.src = "Sol.png";
        } else {
            nightModeIcon.src = "luna.png";
        }
    }

    document.documentElement.classList.toggle('night-mode');
}

function obtenerFechaYHora() {
    const fechaActual = new Date();
    const dia = fechaActual.getDate().toString().padStart(2, '0');
    const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); // Se suma 1 porque enero es 0
    const año = fechaActual.getFullYear();
    const horas = fechaActual.getHours().toString().padStart(2, '0');
    const minutos = fechaActual.getMinutes().toString().padStart(2, '0');

    return `HOY ${dia}-${mes} ${horas}:${minutos}`;
}

function actualizarFechaYHora() {
    const fechaHoraElemento = document.getElementById('fechaActual');
    if (fechaHoraElemento) {
        fechaHoraElemento.textContent = obtenerFechaYHora();
        const hrElemento = document.createElement('hr');
        fechaHoraElemento.appendChild(hrElemento);

        const precioElemento = document.createElement('p');
        precioElemento.textContent = '$0.00';
        fechaHoraElemento.appendChild(precioElemento);

    }
    reiniciarIntervalo();

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