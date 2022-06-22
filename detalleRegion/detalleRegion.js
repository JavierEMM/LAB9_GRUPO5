$(document).ready(function () {
    // Metodo de obtención de parámetros
    const urlParams = new URLSearchParams(window.location.search);
    const idRegion = urlParams.get('region');
    $.ajax({
        method:"GET",
        dataType:"json",
        url:"https://pokeapi.co/api/v2/region/"+idRegion
    }).done(function (data){
        $("#labelRegion").html("Región " +data.name);
        var longitud = data.locations.length;
        pagination(longitud,10)
        let html="";
        for(let j =0;j<10;j++) {
            if(j<data.locations.length){
                html += "<tr>";
                html +="<td>" +(j+1)+"</td>";
                html +="<td>";
                html+= data.locations[j].name;
                html +="</td>";
                html += "<td>"+"<a class='btn btn-primary' href='../detalleLocacion/detalleLocacion.html?locacion="+j+"'>"+"Detalle"+"</a>"+"</td>";
                html += "</tr>";
            }
        }
        $("#tablaLocaciones").empty();
        $("#tablaLocaciones").append(html);
        var valor_anterior = 1;
        $("#paginador").on("click",".page-link",function (){

            let boton = $(this);
            let valor = boton.val();
            let lista = $("li");
            var clase= "page-item active"
            if(boton.hasClass("previous")){
                valor = valor_anterior - 1;
                console.log(valor)
                if(valor>1){
                    $(".previous").closest("li").removeClass("disabled");
                    $(".previous").closest("li").addClass("active");
                }else{
                    if($(".previous").closest("li").hasClass("active")){
                        $(".previous").closest("li").removeClass("active");
                        $(".previous").closest("li").addClass("disabled");
                    }
                }

            }else if(boton.hasClass("next")){
                valor = parseInt(valor_anterior) + 1;
                console.log(valor)
                if(valor<(lista.length-2)){
                    $(".next").closest("li").removeClass("disabled");
                    $(".next").closest("li").addClass("active");
                }else{
                    if($(".next").closest("li").hasClass("active")){
                        $(".next").closest("li").removeClass("active");
                        $(".next").closest("li").addClass("disabled");
                    }
                }
            }
            if(valor>1){
                $(".previous").closest("li").removeClass("disabled");
                $(".previous").closest("li").addClass("active");
            }else{
                if($(".previous").closest("li").hasClass("active")){
                    $(".previous").closest("li").removeClass("active");
                    $(".previous").closest("li").addClass("disabled");
                }else{
                    $(".previous").closest("li").addClass("disabled");
                }
            }
            if(valor<(lista.length-2)){
                $(".next").closest("li").removeClass("disabled");
                $(".next").closest("li").addClass("active");
            }else{
                if($(".next").closest("li").hasClass("active")){
                    $(".next").closest("li").removeClass("active");
                    $(".next").closest("li").addClass("disabled");
                }else{
                    $(".next").closest("li").addClass("disabled");
                }
            }
            lista.each(function () {
                if($(this).hasClass(clase)){
                    $(this).removeClass(clase)
                    $(this).addClass("page-item")
                }
            });
            boton.closest("li").addClass("active");
            let html2="";
            for(let j =(valor-1)*10;j<valor*10;j++) {
                if(j<data.locations.length){
                    html2 += "<tr>";
                    html2 +="<td>" +(j+1)+"</td>";
                    html2 +="<td>";
                    html2+= data.locations[j].name;
                    html2 +="</td>";
                    html2 += "<td>"+"<a class='btn btn-primary' href='../detalleLocacion/detalleLocacion.html?locacion="+j+"'>"+"Detalle"+"</a>"+"</td>";
                    html2 += "</tr>";
                }
            }
            $("#tablaLocaciones").empty();
            $("#tablaLocaciones").append(html2);
            valor_anterior = valor;
        });
    }).fail(function (err){
        console.log(err)
        alert("ERROR EN LA PAGINA")
    });
    function pagination(longitud,maxima_longitud){
        let variable = longitud % maxima_longitud;
        var numero;
        if(variable === 0){
            numero = longitud/maxima_longitud;
        }else{
            numero = Math.floor(longitud/maxima_longitud) + 1;
        }
        let html="";
        html+="<li class='page-item disabled'><button class='page-link previous'>Previous</button></li>";
        for(let i = 0; i<numero; i++){
            html+="<li class='page-item'><button"+" value="+(i+1)+ " class='page-link'>"+(i+1)+"</button></li>";
        }
        html+="<li class='page-item'><button class='page-link next'>Next</button></li>";
        $("#paginador").append(html);
    }
});
