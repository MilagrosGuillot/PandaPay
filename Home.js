
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
//---------------------------------------------------------------------------------------------------------------
    function handleClick() {
        // Get input values
        const nombre = document.querySelector('input[placeholder="Destino nombre"]').value;
        const cbuCvu = document.querySelector('input[placeholder="CBU/CVU"]').value;
        const alias = document.querySelector('input[placeholder="ALIAS"]').value;
        const cuit = document.querySelector('input[placeholder="CUIT"]').value;

        // Reference to the table's tbody
        const tableBody = document.getElementById('enviarDinero');

        // Create a new table row
        const newRow = document.createElement('tr');
        
        // Add table data (columns) to the row
        newRow.innerHTML = `
            <td>${nombre}</td>
            <td>${cbuCvu}</td>
            <td>${alias}</td>
            <td>${cuit}</td>
            <td><img src="../../../css/assets/iconsTable/tacho_gris.png" alt="Borrar" onclick="deleteRow(this)" class="delete-icon"></td>
        `;

        // Append the new row to the table
        tableBody.appendChild(newRow);

        // Clear input fields
        document.querySelector('input[placeholder="Destino nombre"]').value = '';
        document.querySelector('input[placeholder="CBU/CVU"]').value = '';
        document.querySelector('input[placeholder="ALIAS"]').value = '';
        document.querySelector('input[placeholder="CUIT"]').value = '';
    }

    function deleteRow(img) {
        // Delete the row when the delete icon is clicked
        const row = img.closest('tr');
        row.remove();
    }



    var tabla = [
        { fecha: "2023-09-29", destino: "Destino 1", cvu: "CVU12345", referencia: "Referencia 1", monto: "$100", sts: "STS2", borrar: "Borrar2", rec: "Rec1" },
        { fecha: "2023-09-30", destino: "Destino 2", cvu: "CVU67890", referencia: "Referencia 2", monto: "$50", sts: "STS1", borrar: "Borrar1", rec: "Rec2" }
    ];
    
    function CargarTablaDinero() {
        if ($("#tbbodydinero").html()) {
            $("#tbbodydinero").empty();
    
            for (let index = 0; index < tabla.length; index++) {
                var tr = $("<tr>");
                var tdFecha = $("<td>").text(tabla[index].fecha);
                var tdDestino = $("<td>").text(tabla[index].destino);
                var tdCVU = $("<td>").text(tabla[index].cvu);
                var tdReferencia = $("<td>").text(tabla[index].referencia);
                var tdMonto = $("<td>").text(tabla[index].monto);
                
                // Agregar imágenes según el valor de "sts"
                var stsValue = tabla[index].sts;
                var tdSTS = $("<td>");
                if (stsValue === "STS1") {
                    tdSTS.append('<img src="tilde_verde.png" alt="Cruz Verde">');
                } else {
                    tdSTS.append('<img src="cruz_roja.png" alt="Cruz Roja">');
                }
    
                // Agregar imágenes según el valor de "borrar"
                var borrarValue = tabla[index].borrar;
                var tdBorrar = $("<td>");
                if (borrarValue === "Borrar1") {
                    tdBorrar.append('<img src="tacho_gris.png" alt="Tacho Gris">');
                } else {
                    tdBorrar.append('<img src="tacho_rojo.png" alt="Tacho Rojo">');
                }
    
                // Agregar imágenes según el valor de "rec"
                var recValue = tabla[index].rec;
                var tdRec = $("<td>");
                if (recValue === "Rec1") {
                    tdRec.append('<img src="hoja_gris.png" alt="Hoja Gris">');
                } else {
                    tdRec.append('<img src="hoja_verde.png" alt="Hoja Verde">');
                }
                
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
        case "Cambia":
            nombrePagina = "cambiarContraseña";
            break;
        default:
            nombrePagina = "inicio";
            return;
    }

    document.getElementById("content").innerHTML = '';
    cargarPagina(nombrePagina);
}
var botonActivo = null;

function ocultarElementosEnMovil() {
    const contentMerchant = document.querySelector('.contentMerchant');
    const contentDinero = document.querySelector('.contentDinero');
    const dineroEnCuentaMobile = document.querySelector('#dinero-en-cuenta-mobile');

    // Oculta los elementos agregando la clase 'oculto'
    contentMerchant.classList.add('oculto');
    contentDinero.classList.add('oculto');
    dineroEnCuentaMobile.classList.add('oculto');
}

function mostrarElementosEnMovil() {
    const contentMerchant = document.querySelector('.contentMerchant');
    const contentDinero = document.querySelector('.contentDinero');
    const dineroEnCuentaMobile = document.querySelector('#dinero-en-cuenta-mobile');

    // Muestra los elementos quitando la clase 'oculto'
    contentMerchant.classList.remove('oculto');
    contentDinero.classList.remove('oculto');
    dineroEnCuentaMobile.classList.remove('oculto');
}

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

    if (nombrePagina !== 'inicio') {
        // Llama a la función para ocultar los elementos si no estamos en la página de inicio
        ocultarElementosEnMovil();
        
    } 
    else {
        // Llama a la función para mostrar los elementos y establecer 'activado' cuando volvemos a la página de inicio
        mostrarElementosEnMovil();
    }
    console.log(nombrePagina)
    cargarPagina(nombrePagina);
}

function cargarPagina(nombrePagina) {
    // Verificar si la página es "inicio"
    if (nombrePagina === "inicio") {
        document.getElementById("inicioicon").click();
    }

    // Verificar si la página es "comprobante"
    if (nombrePagina === "comprobante") {
        cargarComprobante();
        return;
    }
    // Verificar si la página es "liquidacion"
    if (nombrePagina === "liquidacion") {
        cargarLiquidacion();
        return;
    }
    
    // Realizar la carga común de la página
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

// Función para cargar la página de comprobante
function cargarComprobante() {
    ocultarElementosEnMovil();
    $.ajax({
        type: "GET",
        url: "comprobante.html",
        success: function (data) {
            $("#content").html(data);
        },
        error: function () {
            alert("Error al cargar la página de comprobante.");
        }
    });
}

// Función para cargar la página de liquidacion
function cargarLiquidacion() {
    ocultarElementosEnMovil();
    $.ajax({
        type: "GET",
        url: "liquidacion.html",
        success: function (data) {
            $("#content").html(data);
        },
        error: function () {
            alert("Error al cargar la página de liquidacion.");
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

function volverEnviarDinero() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "enviarDinero.html", true);
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
    const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
    const horas = fechaActual.getHours().toString().padStart(2, '0');
    const minutos = fechaActual.getMinutes().toString().padStart(2, '0');

    return `HOY ${dia}-${mes} ${horas}:${minutos}`;
}

function actualizarFechaYHora() {
    const fechaHoraElementoDesktop = document.getElementById('fechaActualDesktop');
    const fechaHoraElementoMobile = document.getElementById('fechaActualMobile');

    if (fechaHoraElementoDesktop) {
        fechaHoraElementoDesktop.textContent = obtenerFechaYHora();

        const brElementDesktop = document.createElement('br');
        fechaHoraElementoDesktop.appendChild(brElementDesktop);

        const precioElementoDesktop = document.createElement('p');
        precioElementoDesktop.textContent = '$0.00';
        fechaHoraElementoDesktop.appendChild(precioElementoDesktop);
    }

    if (fechaHoraElementoMobile) {
        fechaHoraElementoMobile.textContent = obtenerFechaYHora();

        const precioElementoMobile = document.createElement('p');
        precioElementoMobile.textContent = '$0.00';
        fechaHoraElementoMobile.appendChild(precioElementoMobile);
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




