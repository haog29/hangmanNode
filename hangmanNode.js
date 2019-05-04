
var inquirer = require('inquirer');
var underScore = require('is-letter');
var words = require('./words.js');
var wordsToGuess = require('./wordsToGuess.js');
var wordBank = wordsToGuess.wordList
var remGuess = 5
var guessedLetters = []

startGame();



  function startGame() {

    console.log('------------------------')
    console.log('BT21 HANGMAN')
    console.log('------------------------')

    if(guessedLetters.length > 0){

      guessedLetters = []

    }

    inquirer.prompt([{

      name: "play",
      type: "confirm",
      message: "starting game...?"

    }]).then(function(answer) {

      if(answer.play){

        newGame()

      } else {

        console.log("Loading new game");

      }

    })}



    function newGame() {

      if(remGuess === 5) {

        //still incomplete.. undone

        console.log("You'll only have 5 guesses")

        var randNum = Math.floor(Math.random() * wordBank.length);

      } else {
        resetGuessesRemaining()
        newGame();

      }

    }

    function resetGuessesRemaining() {

      remGuess = 5;

    }

    