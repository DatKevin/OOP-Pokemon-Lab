let deck = [
  {
    name: "Bulbasaur",
    damage: 60
  }, {
    name: "Caterpie",
    damage: 40
  }, {
    name: "Charmander",
    damage: 60
  }, {
    name: "Clefairy",
    damage: 50
  }, {
    name: "Jigglypuff",
    damage: 60
  }, {
    name: "Mankey",
    damage: 30
  }, {
    name: "Meowth",
    damage: 60
  }, {
    name: "Nidoran - female",
    damage: 60
  }, {
    name: "Nidoran - male",
    damage: 50
  }, {
    name: "Oddish",
    damage: 40
  }, {
    name: "Pidgey",
    damage: 50
  }, {
    name: "Pikachu",
    damage: 50
  }, {
    name: "Poliwag",
    damage: 50
  }, {
    name: "Psyduck",
    damage: 60
  }, {
    name: "Rattata",
    damage: 30
  }, {
    name: "Squirtle",
    damage: 60
  }, {
    name: "Vulpix",
    damage: 50
  }, {
    name: "Weedle", 
    damage: 40
  }
]

//Game deals 3 random unique cards to each player
class MakePlayer {
  constructor(name){
    this.name = name
    this.deck = []
    this.points = 0
    this.currentCardDamage = 0
    this.currentCard = []
    this.roundsWon = 0

  }

  getDeck(){
    for (let i=0; i<3; i++) {
      let randomcard = Math.floor(Math.random()*(deck.length - 1))
      this.deck.push(deck[randomcard])
      deck.splice(randomcard, 1)
    }

  }

  clearDeck(){
    this.deck = []
  }
}
let player = new MakePlayer("Dat")
let computer = new MakePlayer("Opponent")

//Start game
//Player picks a card

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let response = ""

var gamestart = function (){
    

    //When player hands are empty, new round beigns and players are dealt new cards
    if (player.deck.length == 0) {
      //Checks to see if a round was won
      if (player.points > computer.points) {
        console.log("You won the round!\n")
        player.roundsWon += 1
      }
      else if (player.points < computer.points) {
        console.log("Your opponent has won the round!\n")
        computer.roundsWon += 1
      }
      //prevents declaring a tie at the beginning of the game
      else if (player.currentCardDamage != 0){
        console.log("It's a tie! No one wins this round!\n")
      }
      player.points = 0
      computer.points = 0
      player.getDeck()
      computer.getDeck()
    }

    //Checks if the deck is empty or if the score is 2 - 0 and declares winner!
    if ((deck.length == 0 && player.deck.length == 0) || (computer.roundsWon == 2 && player.roundsWon == 0) 
      || (player.roundsWon == 2 && computer.roundsWon == 0)) {
      console.log("Game over!")
      if (player.roundsWon > computer.roundsWon) {
        console.log("You win! Congratulations " + player.name + "!")
        console.log("You won " + player.roundsWon + " to " + computer.roundsWon)
        console.log("Nice job!")
      }
      else if (player.roundsWon < computer.roundsWon) {
        console.log("Computer wins! Sorry " + player.name + "!")
        console.log("You lost " + player.roundsWon + " to " + computer.roundsWon)
        console.log("You'll do better next time!")
      }
      else {
        console.log("It's a tie!")
        console.log("Round points were " + player.roundsWon + " to " + computer.roundsWon)
        console.log("Try harder next time")
      }
      return rl.close()
    } 


    //Computer picks a card
    computer.currentCard[0] = computer.deck[Math.floor(Math.random()*(2))]
    computer.currentCardDamage = computer.currentCard[0].damage
   
    //UI for details as well as prompt that ask for response 
    console.log("Player: " + player.name + " -------- Point scores: "
      + player.points + " - " + computer.points + " -------- Round scores: "
      + player.roundsWon + " - " + computer.roundsWon 
      + "\nThese are your pokemon: \n")
      for (let i = 0; i < player.deck.length; i++) {
        console.log((i+1) + ". " + player.deck[i].name + ": " + player.deck[i].damage + " damage \n")
       }

   rl.question("Which one do you wanna play? (pick the corresponding number. Any other input quits):  \n", 
      function(answer) {
        response = answer

      //Do this based on which card was picked 
      if (response == 1) {
        player.currentCardDamage = player.deck[0].damage
        player.currentCard[0] = (player.deck[0])
        player.deck.splice(player.deck[0], 1)
      } 
      else if (player.deck.length >= 2 && response == 2){
        player.currentCardDamage = player.deck[1].damage
        player.currentCard[0] = (player.deck[1])
        player.deck.splice(player.deck[1], 1)
      }
      else if (player.deck.length >= 3 && response == 3){
        player.currentCardDamage = player.deck[2].damage
        player.currentCard[0] = (player.deck[2])
        player.deck.splice(player.deck[2], 1)
      }

      // quits game if 1 2 or 3 were not picked 
      else {
        console.log("Thanks for playing! Goodbye!")
        return rl.close()
      }

      //Showdown
      console.log("\nYou played " + player.currentCard[0].name + "! "
        + "It deals " + player.currentCardDamage + " damage! \n"
        + "Computer played " +  computer.currentCard[0].name + "!"
        + "It deals " + computer.currentCardDamage + " damage! \n")



      //Compare Damages and awards points
      if (computer.currentCardDamage > player.currentCardDamage) {
        console.log("Computer wins!")
        computer.points += 1 
        console.log("Computer points: " + computer.points + "\n")
      }
      else if (player.currentCardDamage > computer.currentCardDamage) {
        console.log("You win!")
        player.points += 1
        console.log("Player points: " + player.points + "\n")
      }
      else if (player.currentCardDamage == computer.currentCardDamage){
        console.log("It's a tie! No one gets any points. \n")
      }
      
      
      //Loops the game
      gamestart()
    });
}

gamestart()