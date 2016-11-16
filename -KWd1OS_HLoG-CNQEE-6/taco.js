var taco = $("#taco");

taco.click(function() {
  tacoClickedAnimation1();
})

function tacoClickedAnimation1() {
  taco.css({background: "ghostwhite"});
  
  setTimeout(
    function() {
      taco.css({background: "white"});
    }, 100)
  $("#tacoTitle").html("hi");
}


var tacoCount = 0

var moreTaco()