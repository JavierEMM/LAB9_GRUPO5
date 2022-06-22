
$(document).ready(function () {
    // Metodo de obtención de parámetros
    const urlParams = new URLSearchParams(window.location.search);
    const idLocacion = urlParams.get('locacion');




    $.get("https://pokeapi.co/api/v2/location/"+idLocacion).done(function (rpta){
        console.log(rpta);
        $("#labelLocacion").html("Locación: " + rpta.name);
        $("#labelRegion").html("Región: " + rpta.region.name);
        var areas = rpta.areas;
        var i = 0;
        for(var area of areas){
            console.log(area.name);
        }
    })
});