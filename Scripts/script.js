$(document).ready(function(){
  console.log("Documento preparado");

$("#add").click(function(){

  var txt = document.getElementById('box-things').value;
  var $li = $(txt);

  $("#list").append("<li class='please'>"+txt+"</li>");
});

$("#list").on("click",".please", function(event){
  $(this).fadeOut('slow');
});
});
