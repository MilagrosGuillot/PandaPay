
ventas=[
    {
        fecha: "2023/09/01",
        debito: false,
       credito1Pago: null,
        creditoCuotas: "20/25",
        total: 1000.00
    },
    {
        fecha: "2023/08/06",
        debito: false,
       credito1Pago: null,
        creditoCuotas: "10/25",
        total: 900.00
    },
    {
        fecha: "2022/12/24",
        debito: false,
       credito1Pago: null,
        creditoCuotas: "20/25",
        total: 1000.00
    }, {
        fecha: "2022/12/24",
        debito: true,
       credito1Pago: "Aceptado",
        creditoCuotas: null,
        total: 1000.00
    },{
        fecha: "2022/12/24",
        debito: true,
        credito1Pago: "Aceptado",
        creditoCuotas: null,
        total: 700.00
    }
]





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

    var lista = document.getElementById("miTabla");
    lista.innerHTML = "";
    console.log(fechaHasta);
    console.log(fechaDesde);
    var num=0;
    for (let index = 0; index < ventas.length; index++) {
        var fechaFormat = new Date(ventas[index].fecha);
        
        console.log(fechaFormat);
        if (fechaFormat.getTime() >= fechaDesde.getTime() && fechaFormat.getTime() <= fechaHasta.getTime()) {
            num++;
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var td3 = document.createElement("td");
            var td4 = document.createElement("td");
            var td5 = document.createElement("td");
            tr.innerHTML="";
            td1.textContent = ventas[index].fecha;
            if(ventas[index].debito==false){
                td2.textContent = "Credito";
                td3.textContent = ventas[index].credito1Pago;
                td4.textContent = ventas[index].creditoCuotas;
                
            }else{
                td2.textContent = "Debito";
                td3.textContent = "No aplica";
                td4.textContent = "No aplica";
            }
            
            td5.textContent =  "$"+  ventas[index].total;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            lista.appendChild(tr);
        }
    }
    if(num===0){
        alert("No hay ese dia");
    }

}
}
  