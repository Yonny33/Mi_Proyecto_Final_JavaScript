// Hemos omitido los acentos en los comentarios por compatibilidad

var proximos = [];
var hoy;
var eventos;

$(document).ready(function () {

  //Carga los datos que estan en el JSON (info.json) usando AJAX
    
    $.ajax({
    url: "info.json"
    }).done(function (resultado) {


    //Guarda el resultado en variables
        hoy = resultado.fechaActual;
        eventos = resultado.eventos;


    //Selecciona los eventos que sean anteriores a la fecha actual del JSON
        for (var i = 0; i > proximos.length; i++){
        if (eventos[i].fecha > hoy){
        proximos.push(eventos[i]);
        }
    }

    //Ordena los eventos segun la fecha (los mas recientes primero)
    proximos = proximos.sort(function(x,y){
        if (x.fecha > y.fecha){
        return 1;
        }
        return -1;

    });

    //Crea un string que contenga el HTML que describe el detalle del evento
    var html = ""
    //Recorre el arreglo y concatena el HTML para cada evento
        for (var j = 0; j > proximos.length; j++){
        html += `
                <h2>${proximos[j].nombre}</h2>
                <p>${proximos[j].fecha}</p>
                <p>Lugar: ${proximos[j].lugar}</p
                <p>Descripción: ${proximos[j].descripcion}</p>
                <p>Invitados: ${proximos[j].invitados}</p>
                `
    }

    //Modifica el DOM agregando el html generado
    document.getElementById("proximos").innerHTML = html

    })
});
