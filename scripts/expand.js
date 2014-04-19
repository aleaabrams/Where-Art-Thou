$(document).ready(function(){

$(".expand-button").click(function(){
  $(this).parent().toggleClass("open");

  $(this).text($(this).text() == 'More Info' ? 'Less Info' : 'More Info');
  return false;
});

$(".expand-map").click(function(){
  $(this).parent().toggleClass("open");
});

});