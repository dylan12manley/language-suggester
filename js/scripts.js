$( document ).ready(function() {
  $("form#suggester").submit(function(event) {
    event.preventDefault();

    console.log("answer", answer)

    var number1 = parseInt($("select#experience").val());
    var number2 = parseInt($("select#frontOrBack").val());
    var number3 = parseInt($("select#jobOrSkill").val());
    var number4 = parseInt($("select#learn").val());
    var number5 = parseInt($("select#nerd").val());
    console.log("number1", number1)
    console.log("number2", number2)
    console.log("number3", number3)
    console.log("number4", number4)
    console.log("number5", number5)

    var answer = parseInt(number1 + number2 + number3 + number4 + number5);

    if (number1 === 1){
      $("#html").show();
      $("#javascript").hide();
      $("#react").hide();
      $("#ruby").hide();
    }
    else if (number1 === 10){
      $("#javascript").show();
      $("#html").hide();
      $("#react").hide();
      $("#ruby").hide();
    }
    else if (number1 === 100){
      $("#javascript").hide();
      $("#html").hide();
      $("#react").hide();
      $("#ruby").show();
    }
    else {
      $("#react").show();
      $("#javascript").hide();
      $("#html").hide();
      $("#ruby").hide();
    }
  });

// This is the script for the #questionReal//

  // $("input#customRadio1").click(function(){
  //   $("#javascript").show();
  //   $("#ruby").hide();
  //   $("#react").hide();
  //   $("#html").hide();
  // });
  // $("input#customRadio2").click(function(){
  //   $("#ruby").show();
  //   $("#javascript").hide();
  //   $("#react").hide();
  //   $("#html").hide();
  // });
  // $("input#customRadio3").click(function(){
  //   $("#react").show();
  //   $("#javascript").hide();
  //   $("#ruby").hide();
  //   $("#html").hide();
  // });
  // $("input#customRadio4").click(function(){
  //   $("#html").show();
  //   $("#javascript").hide();
  //   $("#ruby").hide();
  //   $("#react").hide();
  // });

    console.log( "ready!" );
});
