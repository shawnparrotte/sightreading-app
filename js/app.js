/*
  Renders Notes on Staff
*/

//declare myVar in global scope to stop both functions
var myVar;
var canGo = true;

//stop note stream function
function clearNotes(){

//how many blank staves to clear the page
var clearLength = 3;

  //set interval
  myVar = setInterval(function(){

    //assign variables to locations
    var $next3 = $("#next3");
    var $next2 = $("#next2");
    var $next = $("#next");
    var $now = $("#now");
    var $prev = $("#prev");
    var $prev2 = $("#prev2");

    //shift notes to the left
    $prev2.html($prev.html());
    $prev.html($now.html());
    $now.html($next.html());
    $next.html($next2.html());
    $next2.html($next3.html());
    $next3.html(blank);

    //step down one
    clearLength -= 1;

    //stop when counter = 0
    if (clearLength === 0){
      clearInterval(myVar)
      speed = (60000/$('#bpm').text());
      canGo = true;
    }
  }, speed);
}

//starting note variable
var currentNote = 3;

//note stream function [amount and speed defined in interface.js]
function startSightread (speed) {

  canGo = false;

  //set interval
  myVar = setInterval(function(){

    //random selection of the array [thisisthekey defined in interface.js]
    var $selected = $("#selected");

    //bucket to place selected notes
    var noteBucket = [];

    //push notes to bucket based on difficulty
    if ($selected.text() === "EASY") {
      if (currentNote == 0) {
        noteBucket.push(currentNote + 1)
      } else if(currentNote == thisisthekey[key].length - 1){
        noteBucket.push(currentNote - 1)
      } else {
        noteBucket.push(currentNote - 1, currentNote + 1)
      }
    } else if($selected.text() === "MEDIUM"){
      if (currentNote <= 0) {
        noteBucket.push(currentNote + 1, currentNote + 2)
      } else if(currentNote >= thisisthekey[key].length - 1){
        noteBucket.push(currentNote - 1, currentNote - 2)
      } else {
        noteBucket.push(currentNote - 1, currentNote - 2, currentNote + 1, currentNote + 2)
      }
    } else if($selected.text() === "HARD"){
      if (currentNote <= 0) {
        noteBucket.push(currentNote + 1, currentNote + 2, currentNote + 3)
      } else if(currentNote >= thisisthekey[key].length - 2){
        noteBucket.push(currentNote - 1, currentNote - 2, currentNote - 3)
      } else {
        noteBucket.push(currentNote - 1, currentNote - 2, currentNote - 3, currentNote + 1, currentNote + 2, currentNote + 3)
      }
    }

    //get a random index number from the length of the bucket array
    var randomBucket = Math.floor(Math.random() * noteBucket.length);

    //draw a number from the bucket
    currentNote = Math.abs(noteBucket[randomBucket]);

    //log the number (array number of currentKey)
    console.log(currentNote);

    //assign variables to locations
    var $next3 = $("#next3");
    var $next2 = $("#next2");
    var $next = $("#next");
    var $now = $("#now");
    var $prev = $("#prev");
    var $prev2 = $("#prev2");

    //move notes along the staff [thisisthekey defined in interface.js]
    $prev2.html($prev.html());
    $prev.html($now.html());
    $now.html($next.html());
    $next.html($next2.html());
    $next2.html($next3.html());
    $next3.html(thisisthekey[key][currentNote]);

  }, speed);
}
