var computerChoices = ['q', 'w','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];


var wins = 0;
var losses = 0;
var chances = 15;


document.onkeyup = function(event) {


  var userGuess = event.key;


  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  if ((userGuess === "q") || (userGuess === "w") || (userGuess === "e") || (userGuess === "r") || (userGuess === "t") || (userGuess === "y") || (userGuess === "u") || (userGuess === "i") || (userGuess === "o") || (userGuess === "p") || (userGuess === "a") || (userGuess === "s") || (userGuess === "d") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "z") || (userGuess === "x") || (userGuess === "c") || (userGuess === "v") || (userGuess === "b") || (userGuess === "n") || (userGuess === "m")) {

    
    if ((userGuess === computerGuess)) {
      wins++;
    }

    else if ((userGuess != computerGuess)) {
      chances--;
    }
    if (chances === 0) {
      losses++;
      chances = 15;
    }

    


    var html =
      "<p>You chose: " + userGuess + "</p>" +
      "<p>The computer chose: " + computerGuess + "</p>" +
      "<p>wins: " + wins + "</p>" +
      "<p>losses: " + losses + "</p>" +
      "<p>chances: " + chances + "</p>";


    document.querySelector("#game").innerHTML = html;
  }
};