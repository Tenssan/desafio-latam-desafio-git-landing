
// cambia el color de un icono al hacer doble click a rojo
$(document).ready(function(){
    $("i").dblclick(function(){
        $(this).css("color", "red");
    });
});