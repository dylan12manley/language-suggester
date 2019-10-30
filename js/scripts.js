$( document ).ready(function() {
  $("form#suggester").submit(function(event) {
    event.preventDefault();

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
    console.log("answer", answer)

    $("#javascript, #html, #react, #ruby").hide();

    if (answer === 5){
      $("#html").show();
    }
    else if (answer <= 50){
      $("#javascript").show();
    }
    else if (answer <= 500){
      $("#ruby").show();
    }
    else {
      $("#react").show();
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
