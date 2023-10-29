
ventas = [{


    fecha:"2023-09-01",
    aprobadas:"20/25",
    total:1000.00
},
{


    fecha:"2023-08-06",
    aprobadas:"10/25",
    total:900.00
},{


    fecha:"2022-12-24",
    aprobadas:"20/25",
    total:1000.00
}];


function buscar() {
    console.log("LLEgo aca");

    var DesdeDia = parseInt(document.getElementById("desdeDia").value);
    var DesdeMes = parseInt(document.getElementById("desdeMes").value) - 1; // Resta 1 para el mes (0-11)
    var DesdeAño = parseInt(document.getElementById("desdeAño").value);
    var HastaDia = parseInt(document.getElementById("hastaDia").value);
    var HastaMes = parseInt(document.getElementById("hastaMes").value) - 1; // Resta 1 para el mes (0-11)
    var HastaAño = parseInt(document.getElementById("hastaAño").value);

    var fechaDesde = new Date(DesdeAño, DesdeMes, DesdeDia);
    var fechaHasta = new Date(HastaAño, HastaMes, HastaDia);
if(fechaDesde.getTime()==fechaHasta.getTime()){
alert("Error")

}else{

    var lista = document.getElementById("VentaPagina");
    lista.innerHTML = "";
    console.log(fechaHasta);
    console.log(fechaDesde);
    for (let index = 0; index < ventas.length; index++) {
        var fechaFormat = new Date(ventas[index].fecha);
        
        console.log(fechaFormat);
        if (fechaFormat.getTime() >= fechaDesde.getTime() && fechaFormat.getTime() <= fechaHasta.getTime()) {
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var td3 = document.createElement("td");
            td1.textContent = ventas[index].fecha;
            td2.textContent = ventas[index].aprobadas;
            td3.textContent = "$"+ ventas[index].total;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            lista.appendChild(tr);
        }
    }
}
}
  