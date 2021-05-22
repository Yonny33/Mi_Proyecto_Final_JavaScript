var eventos = [];
var id;
var detalle;

$(document).ready(function () {

    //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "info.json"
  }).done(function (resultado) {

    //Guarda el resultado en una variable
    id = resultado.eventos;
    eventos = resultado.eventos;
    console.log(eventos);

    //Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>
    var id = location.search.match(/id=(\d)*/)[1]

    //Busca el elemento en el arreglo
    evento = eventos.find(function (element) {
      return element.id == id
    });

    //Crea un string que contenga el HTML que describe el detalle del evento
    var html = ""


    var html = `
                <h2>${evento.nombre}</h2>
                <p>${evento.fecha}</p>
                <p>Lugar: ${evento.lugar}</p
                <p>Descripción: ${evento.descripcion}</p>
                <p>Costo: ${evento.precio}</p>
                <p>Invitados: ${evento.invitados}</p>
                `
//Modifica el DOM agregando el html generado dentro del div con id=evento
    document.getElementById("evento").innerHTML = html
  });
});
