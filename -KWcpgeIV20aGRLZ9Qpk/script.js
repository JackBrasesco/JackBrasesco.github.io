var shown = true
setInterval(function() {
  if (shown) {
    $(".blinking").css({"visibility": "hidden"});
    shown = false;
  } else {		
    $(".blinking").css({"visibility": "visible"});
    shown = true;
  }
}, 1000)


var lettersToFade = $(".by-letter-fade").children();
var index = 0
setInterval(function() {
  if (index >= lettersToFade.length) {
    index = 0
  }

  var letterToFade = $(lettersToFade[index]);

  letterToFade.animate({"opacity": "0"}, {
    complete: function() {
      letterToFade.animate({opacity: "1"})
    }
  }) 	

  index = index + 1
}, 100)


var aniCount = 0

setInterval(function() {
aniCount = aniCount + 1
}, 100)
console.log(aniCount);

if (aniCount > 4) {
  $("#lol").fontcolor(red);
}
if (aniCount == 10) {
  $("#lol").fontcolor(blue);
  aniCount = 0;
}
