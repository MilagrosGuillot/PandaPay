/*ventas = [
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
    }
];

window.onload=function(){

    var lista = document.getElementById("MiLista");

    for (let index = 0; index < ventas.length; index++) {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.textContent = ventas[index].fecha;
        td2.textContent = ventas[index].aprobadas;
        td3.textContent = ventas[index].total;
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        lista.append(tr);
       
       
    }
}*/