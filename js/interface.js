/*
  bpm selector
*/

//speed on load
var speed = 1200;
var bpm = 50;

//arrow up functionality
$(".fa-arrow-up").click(function(){
  if (parseInt($("#bpm").text(), 10) <= 299) {
    bpm += 1;
    speed = (60000)/(bpm);
    $("#bpm").text(bpm);
  }
});

//arrow down functionality
$(".fa-arrow-down").click(function(){
  if (parseInt($("#bpm").text(), 10) > 1) {
    bpm -= 1
    speed = (60000)/(bpm);
    $("#bpm").text(bpm);
  }
});

/*
  Choosing Difficulty
*/

//moves selected id on click
$(".level").children().on("click", function(){

  $(".level").children().css("background-color", "");
  $(".level").children().removeAttr("id");
  $(this).attr("id","selected");
  var bgcolor = $('#selected').data("color");
  $("#selected").css("background-color", bgcolor);
});

/*
  Start and Stop Button Functions
*/

$("#start").click(function(){

  getCurrentKey();

  if(canGo === true){

    if(key == "dbMinoroneOctave" || key == "dsMajoroneOctave" ||
       key == "gsMajoroneOctave" || key == "asMajoroneOctave" ||
       key == "dbMinortwoOctave" || key == "dsMajortwoOctave" ||
       key == "gsMajoroneOctave" || key == "asMajoroneOctave" ||
       key == "cbMinoroneOctave" || key == "cbMinortwoOctave" ){
      $('#myModal').foundation('reveal', 'open');
    } else {
        console.log(speed);
        startSightread(speed);
    }

  } else {
      console.log("please stop before starting again!")
  }

});

$("#stop").click(function(){

  if(canGo === false){
  clearInterval(myVar);
  clearNotes();
  }

});

/*
  Creating Key Variable
*/

var currentKey;
var currentScale;
var currentOctave;

//key on load
var key = "cMajoroneOctave"

function getCurrentKey(){
  currentKey = $('#root').val();
  currentScale = $('#scale').val();
  currentOctave = $('#octave').val();
  key = currentKey + currentScale + currentOctave;
  return key
}
