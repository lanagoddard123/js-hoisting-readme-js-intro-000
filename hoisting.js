var lyric = "maybe";
function callMe() {
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  return lyric;
}
var thisIsCrazy = function crazy() {
    console.log("hey!!!")
  }
}

thisIsCrazy();

function sayMyName() {
  var name = "Kristin";
  return function sayMy() {
    var name = "Cricky";
    console.log(name);
  }
}
sayMyName();
