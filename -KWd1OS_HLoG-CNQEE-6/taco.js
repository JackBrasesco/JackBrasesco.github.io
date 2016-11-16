var taco = $("#taco");

taco.click(function() {
  tacoClickedAnimation1()
  console.log("hi")
})

function tacoClickedAnimation1() {
  taco.css({background: "grey"});
}

function tacoClickedAnimation2() {
  taco.css({background: "white"});
}