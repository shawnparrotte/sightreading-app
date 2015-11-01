
$.preload( 'img/note_0.jpg',
           'img/note_C0.jpg',
           'img/note_D0.jpg',
           'img/note_E0.jpg',
           'img/note_F0.jpg',
           'img/note_G0.jpg',
           'img/note_A.jpg',
           'img/note_B.jpg',
           'img/note_C.jpg',
           'img/note_D.jpg',
           'img/note_E.jpg',
           'img/note_F.jpg',
           'img/note_G.jpg',
           'img/note_A2.jpg',
           'img/note_B2.jpg',
           'img/note_C2.jpg'
      );

var blank = "<img src='img/note_0.jpg'>";
var realC0 = "<img src='img/note_C0.jpg'>";
var realD0 = "<img src='img/note_D0.jpg'>";
var realE0 = "<img src='img/note_E0.jpg'>";
var realF0 = "<img src='img/note_F0.jpg'>";
var realG0 = "<img src='img/note_G0.jpg'>";
var realA = "<img src='img/note_A.jpg'>";
var realB = "<img src='img/note_B.jpg'>";
var realC = "<img src='img/note_C.jpg'>";
var realD = "<img src='img/note_D.jpg'>";
var realE = "<img src='img/note_E.jpg'>";
var realF = "<img src='img/note_F.jpg'>";
var realG = "<img src='img/note_G.jpg'>";
var realA2 = "<img src='img/note_A2.jpg'>";
var realB2 = "<img src='img/note_B2.jpg'>";
var realC2 = "<img src='img/note_C2.jpg'>";



var realNotes = [realA, realB, realC, realD, realE, realF, realG, realA2, realB2, realC2, realC0, realD0, realE0, realF0, realG0];

var myVar;

function clearNotes(){

var clearLength = 3;

  myVar = setInterval(function(){

    var $next3 = $("#next3");
    var $next2 = $("#next2");
    var $next = $("#next");
    var $now = $("#now");
    var $prev = $("#prev");
    var $prev2 = $("#prev2");

    $prev2.html($prev.html());
    $prev.html($now.html());
    $now.html($next.html());
    $next.html($next2.html());
    $next2.html($next3.html());
    $next3.html(blank);

    clearLength -= 1;

    if (clearLength === 0){
      clearInterval(myVar)
      speed = 0;
    }

  }, speed);
}

function startSightread (amount, speed) {

  var readLength = amount;

  myVar = setInterval(function(){

    var randomNumber = Math.floor(Math.random() * 16);

    var $next3 = $("#next3");
    var $next2 = $("#next2");
    var $next = $("#next");
    var $now = $("#now");
    var $prev = $("#prev");
    var $prev2 = $("#prev2");

    if (readLength === 1){
      clearInterval(myVar);
      clearNotes();
    }

    $prev2.html($prev.html());
    $prev.html($now.html());
    $now.html($next.html());
    $next.html($next2.html());
    $next2.html($next3.html());
    $next3.html(realNotes[randomNumber]);

    readLength -= 1;

  }, speed);
}
