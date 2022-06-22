
$(document).ready(function () {
    // Metodo de obtención de parámetros
    const urlParams = new URLSearchParams(window.location.search);
    const idLocacion = urlParams.get('locacion');




    $.get("https://pokeapi.co/api/v2/location/"+idLocacion).done(function (rpta){
        $("#labelLocacion").html("Locación: " + rpta.name);
        $("#labelRegion").html("Región: " + rpta.region.name);
        var areas = rpta.areas;
        var content = "";
        var i = 0;

        for(var area of areas){
            content+= "<tr>";
            content+= "<td>"+ (i+1) +"</td>";
            content+= "<td>"+ area.name+"</td>";
            content+= "<td> <button class='btn btn-primary pkmn' value='"+ area.url + "' >"+ "Ver pokemons</button></td>";
            content+= "<tr>";
            i++;
        }

        $("#tablaAreas").html(content);
    }).fail(function (e){
        console.log(e);
    });

    $("#tablaAreas").on("click",".pkmn",function (){
        url = $(this).val();
        $("#pokemons").empty();
        $.get(url).done(function (data){
            $("#areaSeleccionada").html("Pokmemones a encontrarse en el area: "+data.name);
            var listaPkmn = data.pokemon_encounters;
            console.log(listaPkmn);
            for (var j = 0;j<listaPkmn.length;j++){
               $.get(listaPkmn[j].pokemon.url).done(function (pk){
                   console.log(pk);
                   $("#pokemons").append("<div style='border: solid;margin-left: 20px;margin-right: 20px;margin-bottom: 20px' class='col-2' > <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/version\n" +
                       "s/generation-v/black-white/animated/back/"+pk.id +".gif'> <br>" +pk.name +
                       " </div>");
               }).fail(function (er){
                   console.log(er);
               })


            }

        }).fail(function (e){
            console.log(e);
        });



    })

});