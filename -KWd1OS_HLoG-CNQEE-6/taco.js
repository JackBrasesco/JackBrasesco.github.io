var taco = $("#taco");

taco.click(function() {
  tacoClickedAnimation1();
  console.log("hi");
  tacoClickedAnimation2();
})

function tacoClickedAnimation1() {
  taco.css({background: "grey"});
  
  setTimeout(
    function() {
      taco.css({background: "white"});
    }, 250)
}
