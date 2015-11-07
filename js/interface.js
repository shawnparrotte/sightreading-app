/*
  bpm selector
*/

//speed on load
var speed = 1200;

//arrow up functionality
$(".fa-arrow-up").click(function(){
  if (parseInt($("#bpm").text(), 10) <= 299) {
    times += 1
    speed = (60000)/(times);
    $("#bpm").text(times);
  }
});

//arrow down functionality
$(".fa-arrow-down").click(function(){
  if (parseInt($("#bpm").text(), 10) > 1) {
    times -= 1
    speed = (60000)/(times);
    $("#bpm").text(times);
  }
});

/*
  Choosing Difficulty
*/

//moves selected id on click
$(".level").children().click(function(){
  $(".level").children().removeAttr("id");
  $(this).attr("id","selected");
});

/*
  Start and Stop Button Functions
*/

$("#start").click(function(){
  console.log(speed);
  startSightread(speed);
});

$("#stop").click(function(){
  clearInterval(myVar);
  clearNotes();
});

/*
  Creating Key Variable
*/

var currentKey;
var currentScale;
var currentOctave;

//key on load
var key = "cMajoroneOctave"

//when select options change assign new key variable
$('#readingOptions').change(function(){
  currentKey = $('#root').val();
  currentScale = $('#scale').val();
  currentOctave = $('#octave').val();
  key = currentKey + currentScale + currentOctave;
});
