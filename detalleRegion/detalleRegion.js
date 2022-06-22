
$(document).ready(function () {
    // Metodo de obtención de parámetros
    const urlParams = new URLSearchParams(window.location.search);
    const idRegion = urlParams.get('region');

    console.log(idRegion)
    const url = "https://pokeapi.co/api/v2/region/"+idRegion;
    $.get(url).done(function (data){
        console.log(data)
        $("#labelRegion").html("Región " +data.name);
       var listaLocaciones = data.locations;
       var content = "";
       var i = 0;
      for(var locacion of listaLocaciones){
          console.log(listaLocaciones[i].name);
          content+= "<tr>";
          content+= "<td>"+ (i+1) +"</td>";
          content+= "<td>" +listaLocaciones[i].name  +"</td>";
          content+= "<td> <a href='../detalleLocacion/detalleLocacion.html?locacion="+ listaLocaciones[i].name +"' class='btn btn-primary' >" + "Detalles"  +"</a> </td>";
          content+= "<tr>";
          i++;
      }
      $("#tablaLocaciones").html(content);
    }).fail(function (e){
        console.log(e);
    });


});
