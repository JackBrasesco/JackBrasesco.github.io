//buttons! ----------------------------------------------------

$("#button").click(function() {
  $("#siscreen").css({display: "inline-block"});
})

$("#signup").click(function() {
  $(".su").css({display: "block"});
})

$("#return").click(function() {
  $("#siscreen").css({display: "none"});
})

//Create account ----------------------------------------------

var create = $("#create");

//new user ------------------------------------------------

var newUser = $("#enteruser");

var user = "blah"


//password check -------------------------------------------

var pass1 = $("#enterpass");
var pass2 = $("#passcheck");


//On button press Create ---------------------------------

create.click(function() {
  var accountstyle = $("#color").val()
  if (user.length < 21) {
  user = newUser.val();
  }
  else {
    $("#toolong").css({display: "block"});
  }
  if (pass1.val() == pass2.val()) {
    var newPass = pass1.val()
  }
    else {
      $("#nomatch").css({display: "block"});
    }
  storeValue(user,newPass)
  storeValue(newPass, accountstyle)
  addListItem("listOfUsers",",/" + user)
  pass1.val("")
  pass2.val("")
  newUser.val("")
  $("#color").val("")
})

//Sign In ----------------------------------------------------

var username = $("#username");

var password = $("#password");

var realUser = "Anonymous User"

//Sign in session -------------------------------------------

var signedin = 0

var session = {
  name: realUser
}

//color------------------------------------------

var accountColor = "black"

//Wow! I'm an idiot------------------------------

var jackIsDumb = "Anonymous User"

//On button press Log in--------------

$("#signbutton").click(function() {
  $("#wrong").css({display: "none"})
  $("#right").css({display: "none"})
   realUser = username.val()
  var realPass = password.val()
  once(realPass, function(color) {
    accountColor = color
    console.log(accountColor);
  })
  once(realUser, function(password) {
    if (password == realPass) {
      $("#right").css({display: "block"});
      signedin = 1
     jackIsDumb = realUser
     $("#topbar").html("You are signed in as " + jackIsDumb.fontcolor(accountColor));
    $("#dm").css({display: "inline" });
    }
    else {
      $("#wrong").css({display: "block"});
    }
  })
})



//-----------------------------------------------------------

