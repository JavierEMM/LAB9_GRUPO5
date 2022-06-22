
$(document).ready(function () {
    $.get("https://pokeapi.co/api/v2/region").done(function (rpta){
        console.log(rpta);
        console.log("Corre el script");
        var  listaRegiones = rpta.results
        var conntentHtml = "";
        for(let i=0; i <rpta.count;i++){
            conntentHtml+= "<tr>";
            conntentHtml+= "<td>"+ (i+1) +"</td>";
            conntentHtml+= "<td>" +listaRegiones[i].name  +"</td>";
            conntentHtml+= "<td> <a href='detalleRegion/detalleRegion.html?region="+ (i+1) +"' class='btn btn-primary' >" + "Detalles"  +"</a> </td>";
            conntentHtml+= "<tr>";
        }
        $("#body-paises").html(conntentHtml);
    }).fail(function (err){
        console.log(err);
    });
});