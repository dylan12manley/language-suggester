$( document ).ready(function() {
  $("input#customRadio1").click(function(){
    $("#javascript").show();
    $("#ruby").hide();
    $("#react").hide();
    $("#html").hide();
  });
  $("input#customRadio2").click(function(){
    $("#ruby").show();
    $("#javascript").hide();
    $("#react").hide();
    $("#html").hide();
  });
  $("input#customRadio3").click(function(){
    $("#react").show();
    $("#javascript").hide();
    $("#ruby").hide();
    $("#html").hide();
  });
  $("input#customRadio4").click(function(){
    $("#html").show();
    $("#javascript").hide();
    $("#ruby").hide();
    $("#react").hide();
  });
    console.log( "ready!" );
});
