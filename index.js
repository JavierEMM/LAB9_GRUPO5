
$(document).ready(function () {
    $.get("https://pokeapi.co/api/v2/region").done(function (rpta){
        console.log(rpta);
        console.log("Corre el script");
        var  listaRegiones = rpta.results
        var conntentHtml = "";
        for(let i=0; i <rpta.count;i++){
            conntentHtml+= "<tr>";
            //conntentHtml+= "<form action='detalleRegion/detalleRegion.html' id='regiomFrm'>";
            conntentHtml+= "<td>"+ (i+1) +"</td>";
            conntentHtml+= "<td>" +listaRegiones[i].name  +"</td>";
            conntentHtml+= "<input type='hidden' id='idregion' name='idregion' value=" + (i+1) + ">";
            conntentHtml+= "<td> <button >" + "Detalles"  +"</button> </td>";
            //conntentHtml+= "</form>";
            conntentHtml+= "<tr>";
        }
        $("#body-paises").html(conntentHtml);
    }).fail(function (err){
        console.log(err);
    });

    $("form").submit(function (event){
        window.location.href="detalleLocacion/detalleLocacion.html";
    })

});