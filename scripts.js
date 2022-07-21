//executing the clicking event
document.querySelector(".play").addEventListener("click", function () {
  realGame();
});
//countdown function
function startTimer() {
  document.querySelector(".play").innerHTML = "Tap to Play";
  setTimeout(() => {
    document.querySelector(".result").innerHTML = "result";
    document.querySelector(".keyPressed").innerHTML = "key you pressed";
  }, 800);
  var countTime = 4;
  setInterval(function () {
    if (countTime < 1) {
      clearInterval();
      countTime = 0;
    }
    if (countTime != 0)
      document.querySelector(".gameZone").innerHTML =
        "Game starts in: " + (countTime - 1);
    countTime -= 1;
  }, 800);
}

//generating random letter and resetting the inner htmls

function game() {
  document.querySelector(".result").innerHTML = "<br>";
  document.querySelector(".keyPressed").innerHTML = "<br>";
  var lLetter = String.fromCharCode(Math.floor(Math.random() * 26 + 97));
  var uLetter = String.fromCharCode(Math.floor(Math.random() * 26 + 65));
  var UL = Math.floor(Math.random() * 2);
  var letter = [lLetter, uLetter];
  document.querySelector(".gameZone").innerHTML =
    "press the key: <br><br>" + letter[UL];
  document.addEventListener("keydown", function (event) {
    document.querySelector(".keyPressed").innerHTML = event.key;
    if (
      (event.key === letter[UL] && UL === 0 && !event.shiftKey) ||
      (event.key === letter[UL] && UL === 1 && event.shiftKey)
    ) {
      document.querySelector(".result").style.color = "green";
      document.querySelector(".result").innerHTML = "hooray you did it";

      setTimeout(() => {
        game();
      }, 1000);
    } else {
      if (!event.shiftKey) {
        document.querySelector(".result").style.color = "red";
        document.querySelector(".result").innerHTML =
          "boo you failed, restart now";
        document.querySelector(".play").innerHTML = "Restart";
      }
    }
  });
}

//function to excute both the above functions
function realGame() {
  startTimer();
  setTimeout(() => {
    game();
  }, 4000);
}
