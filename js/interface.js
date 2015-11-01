
var times = 50;

$(".fa-arrow-up").click(function(){
  if (parseInt($("#times").text(), 10) <= 999) {
    times += 1
    $("#times").text(times);
  }
});

$(".fa-arrow-down").click(function(){
  if (parseInt($("#times").text(), 10) > 1) {
    times -= 1
    $("#times").text(times);
  }
});

var speed;

$(".level").children().click(function(){
  $(".level").children().removeAttr("id");
  $(this).attr("id","selected");
});


$("#start").click(function(){

  var $amountOfTimes = parseInt($("#times").text(), 10);
  console.log($amountOfTimes);
  var $selected = $("#selected");

  if ($selected.text() === "EASY"){
    speed = 1200;
  } else if ($selected.text() === "MEDIUM") {
    speed = 1000;
  } else if ($selected.text() === "HARD") {
    speed = 800;
  }
  startSightread($amountOfTimes, speed);
});

$("#stop").click(function(){
  clearInterval(myVar);
  clearNotes();
});
