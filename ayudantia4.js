$(document).ready(function(){
var link=$(".link");
link.mouseenter(function(){
    $(this).fadeTo("fast",0.5);
});
link.mouseleave(function(){
    $(this).fadeTo("fast",1);
});
link.hover(function(){
$("#h3").show();
$("#h3").hide();
});
});