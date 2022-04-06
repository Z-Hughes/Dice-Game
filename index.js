// Using window.performance.navigation.type to only run the rollDice function once the button has been clicked (page has been reloaded)

if (window.performance.navigation.type === 1) {
  rollDice();
}
 
// Function that creates a random number between 1 and 6 to randommly pick a numbered dice image

function rollDice() {
  var randomNumber1 = `images/dice${Math.floor(Math.random() * 6) + 1}.png`;
  var randomNumber2 = `images/dice${Math.floor(Math.random() * 6) + 1}.png`;
 
  document.querySelector(".img1").setAttribute("src", randomNumber1);
  document.querySelector(".img2").setAttribute("src", randomNumber2);
 
  changeTitle(randomNumber1, randomNumber2);
}
 
// Function that chooses a title for the page based on which player won

function changeTitle(num1, num2) {
  if (num1 === num2) {
    document.querySelector("h1").innerHTML = "Draw!";
  } else if (num1 > num2) {
    document.querySelector("h1").innerHTML = "🔻 Player 1 Wins!";
  } else {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🔻";
  }
}