var VentasTotal = [
    {
        FECHA: "2023/09/01",
        COMERCIO: "COMERCIO 1",
        TRID: "TR001",
        OPID: "OP001",
        TIPOOP: "PAGO",
        STATUS: "APROBADA",
        TIPOT: "CREDITO",
        MARCA: "VISA",
        CUOTAS: "20/25",
        MONTO: 1000.00,
        INFO: "INFORMACIÓN ADICIONAL 1"
    },
    {
        FECHA: "2023/08/06",
        COMERCIO: "COMERCIO 2",
        TRID: "TR002",
        OPID: "OP002",
        TIPOOP: "VENTA",
        STATUS: "APROBADA",
        TIPOT: "DEBITO",
        MARCA: "MASTERCARD",
        CUOTAS: "10/25",
        MONTO: 900.00,
        INFO: "INFORMACIÓN ADICIONAL 2"
    },
    {
        FECHA: "2022/12/24",
        COMERCIO: "COMERCIO 3",
        TRID: "TR003",
        OPID: "OP003",
        TIPOOP: "VENTA",
        STATUS: "APROBADA",
        TIPOT: "DEBITO",
        MARCA: "VISA",
        CUOTAS: "20/25",
        MONTO: 1000.00,
        INFO: "INFORMACIÓN ADICIONAL 3"
    },
    {
        FECHA: "2023/09/01",
        COMERCIO: "COMERCIO 1",
        TRID: "TR001",
        OPID: "OP001",
        TIPOOP: "VENTA",
        STATUS: "APROBADA",
        TIPOT: "CREDITO",
        MARCA: "VISA",
        CUOTAS: "20/25",
        MONTO: 1000.00,
        INFO: "INFORMACIÓN ADICIONAL 1"
    },
    {
        FECHA: "2023/08/06",
        COMERCIO: "COMERCIO 2",
        TRID: "TR002",
        OPID: "OP002",
        TIPOOP: "VENTA",
        STATUS: "APROBADA",
        TIPOT: "CREDITO",
        MARCA: "MASTERCARD",
        CUOTAS: "10/25",
        MONTO: 900.00,
        INFO: "INFORMACIÓN ADICIONAL 2"
    },
    {
        FECHA: "2022/12/24",
        COMERCIO: "COMERCIO 3",
        TRID: "TR003",
        OPID: "OP003",
        TIPOOP: "VENTA",
        STATUS: "APROBADA",
        TIPOT: "CREDITO",
        MARCA: "VISA",
        CUOTAS: "20/25",
        MONTO: 1000.00,
        INFO: "INFORMACIÓN ADICIONAL 3"
    },
    {
        FECHA: "2023/09/01",
        COMERCIO: "COMERCIO 4",
        TRID: "TR004",
        OPID: "OP004",
        TIPOOP: "VENTA",
        STATUS: "APROBADA",
        TIPOT: "CREDITO",
        MARCA: "VISA",
        CUOTAS: "20/25",
        MONTO: 1000.00,
        INFO: "INFORMACIÓN ADICIONAL 4"
    },
    {
        FECHA: "2023/08/06",
        COMERCIO: "COMERCIO 5",
        TRID: "TR005",
        OPID: "OP005",
        TIPOOP: "VENTA",
        STATUS: "APROBADA",
        TIPOT: "DEBITO",
        MARCA: "MASTERCARD",
        CUOTAS: "10/25",
        MONTO: 900.00,
        INFO: "INFORMACIÓN ADICIONAL 5"
    },
    {
        FECHA: "2022/12/24",
        COMERCIO: "COMERCIO 6",
        TRID: "TR006",
        OPID: "OP006",
        TIPOOP: "VENTA",
        STATUS: "APROBADA",
        TIPOT: "CREDITO",
        MARCA: "VISA",
        CUOTAS: "20/25",
        MONTO: 1000.00,
        INFO: "INFORMACIÓN ADICIONAL 6"
    },
    {
        FECHA: "2023/09/01",
        COMERCIO: "COMERCIO 7",
        TRID: "TR007",
        OPID: "OP007",
        TIPOOP: "VENTA",
        STATUS: "APROBADA",
        TIPOT: "CREDITO",
        MARCA: "VISA",
        CUOTAS: "20/25",
        MONTO: 1000.00,
        INFO: "INFORMACIÓN ADICIONAL 7"
    },
    {
        FECHA: "2022/12/24",
        COMERCIO: "COMERCIO 8",
        TRID: "TR008",
        OPID: "OP008",
        TIPOOP: "VENTA",
        STATUS: "APROBADA",
        TIPOT: "CREDITO",
        MARCA: "MASTERCARD",
        CUOTAS: "10/25",
        MONTO: 900.00,
        INFO: "INFORMACIÓN ADICIONAL 8"
    },
    {
        FECHA: "2022/12/24",
        COMERCIO: "COMERCIO 9",
        TRID: "TR009",
        OPID: "OP009",
        TIPOOP: "VENTA",
        STATUS: "APROBADA",
        TIPOT: "CREDITO",
        MARCA: "VISA",
        CUOTAS: "20/25",
        MONTO: 1000.00,
        INFO: "INFORMACIÓN ADICIONAL 9"
    },
    {
        FECHA: "2022/12/24",
        COMERCIO: "COMERCIO 10",
        TRID: "TR010",
        OPID: "OP010",
        TIPOOP: "ANULACIÓN",
        STATUS: "APROBADA",
        TIPOT: "CREDITO",
        MARCA: "VISA",
        CUOTAS: "20/25",
        MONTO: 1000.00,
        INFO: "INFORMACIÓN ADICIONAL 10"
    },
    {
        FECHA: "2022/12/24",
        COMERCIO: "COMERCIO 11",
        TRID: "TR011",
        OPID: "OP011",
        TIPOOP: "PAGO",
        STATUS: "APROBADA",
        TIPOT: "DEBITO",
        MARCA: "MASTERCARD",
        CUOTAS: "10/25",
        MONTO: 900.00,
        INFO: "INFORMACIÓN ADICIONAL 11"
    },
    {
        FECHA: "2022/12/24",
        COMERCIO: "COMERCIO 12",
        TRID: "TR012",
        OPID: "OP012",
        TIPOOP: "VENTA",
        STATUS: "APROBADA",
        TIPOT: "DEBITO",
        MARCA: "VISA",
        CUOTAS: "20/25",
        MONTO: 1000.00,
        INFO: "INFORMACIÓN ADICIONAL"
    }
];



function buscarTotal() {
    var Dia = parseInt(document.getElementById("Dia").value);
    var Mes = parseInt(document.getElementById("Mes").value) - 1; // Resta 1 para el mes (0-11)
    var Año = parseInt(document.getElementById("Año").value);

    var fecha = new Date(Año, Mes, Dia);
    var registros = document.getElementById("cantRegistros");
    var lista = document.getElementById("VentaTotal");
    lista.innerHTML = "";

    var operacion = document.getElementById("operacion").value;
    var status = document.getElementById("status").value;
    var tipo = document.getElementById("tipo").value;
    var marca = document.getElementById("marca").value;
    var terminal = document.getElementById("terminal").value;

    var num = 0;

    for (let index = 0; index < VentasTotal.length; index++) {
        var venta = VentasTotal[index];
        var fechaFormat = new Date(venta.FECHA);

        if ((fechaFormat.getTime() === fecha.getTime()) &&
            (operacion === "TODAS" || venta.TIPOOP === operacion) &&
            (status === "TODAS" || venta.STATUS === status) &&
            (tipo === "TODAS" || venta.TIPOT === tipo) &&
            (marca === "TODAS" || venta.MARCA === marca) &&
            (terminal === "TODAS" || venta.TERMINAL === terminal)) {
            num++;
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var td3 = document.createElement("td");
            var td4 = document.createElement("td");
            var td5 = document.createElement("td");
            var td6 = document.createElement("td");
            var td7 = document.createElement("td");
            var td8 = document.createElement("td");
            var td9 = document.createElement("td");
            var td10 = document.createElement("td");
            var td11 = document.createElement("td");

            td1.textContent = venta.FECHA;
            td2.textContent = venta.COMERCIO;
            td3.textContent = venta.TRID;
            td4.textContent = venta.OPID;
            td5.textContent = venta.TIPOOP;
            td6.textContent = venta.STATUS;
            td7.textContent = venta.TIPOT;
            td8.textContent = venta.MARCA;
            td9.textContent = venta.CUOTAS;
            td10.textContent = "$" + venta.MONTO.toFixed(2);
            td11.textContent = venta.INFO;

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            tr.appendChild(td7);
            tr.appendChild(td8);
            tr.appendChild(td9);
            tr.appendChild(td10);
            tr.appendChild(td11);

            lista.appendChild(tr);
        }
    }

    registros.textContent = "Cantidad de registros: " + num;
}
var intervalo;
function cerrarModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
    clearInterval(intervalo); // Detiene el intervalo después de cerrar el modal
  }