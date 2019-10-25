$( document ).ready(function() {
  $("input#customRadio1").click(function(){
    $("#javascript").show();
    $("#ruby").hide();
    $("#react").hide();
  });
  $("input#customRadio2").click(function(){
    $("#ruby").show();
    $("#javascript").hide();
    $("#react").hide();
  });
  $("input#customRadio3").click(function(){
    $("#react").show();
    $("#javascript").hide();
    $("#ruby").hide();
  });
    console.log( "ready!" );
});
