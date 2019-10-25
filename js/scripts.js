$( document ).ready(function() {
  var number1 = parseInt()
  var number2 = parseInt()
  var number3 = parseInt()
  var number4 = parseInt()
  var number5 = parseInt()

  // var sel = document.getElementById('scripts');

  // display value property of select list (from selected option)
  // console.log( sel.value );
  // $("select#experience").submit(function(event) {
  //   event.preventDefault();
  // })

// This is the script for the #questionReal//

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
