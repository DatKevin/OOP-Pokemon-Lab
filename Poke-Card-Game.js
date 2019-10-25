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
class Game {
  constructor(name){
    this.name = name
    this.deck = []
    this.points = 0
    this.currentCardDamage = 0
    this.currentCard = []

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
let player = new Game("Dat")
let computer = new Game("Opponent")

//Start game
//Player picks a card

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let response = ""

var gamestart = function (){
    
    //Checks if the deck is empty and declares winner!
    if (deck.length == 0) {
      console.log("Game over!")
      if (player.points > computer.points) {
        console.log("You win! Congratulations " + player.name + "!")
        console.log("You won " + player.points + " to " + computer.points)
        console.log("Nice job!")
      }
      else if (player.points < computer.points) {
        console.log("Computer wins! Sorry " + player.name + "!")
        console.log("You lost " + player.points + " to " + computer.points)
        console.log("You'll do better next time!")
      }
      else {
        console.log("It's a tie!")
        console.log("Points were " + player.points + " to " + computer.points)
        console.log("Try harder next time")
      }
      return rl.close()
    } 


    //Deal Cards to players
    player.getDeck()
    computer.getDeck()

    //Computer picks a card
    computer.currentCard[0] = computer.deck[Math.floor(Math.random()*(2))]
    computer.currentCardDamage = computer.currentCard[0].damage
   
    //UI for details as well as prompt that ask for response 
   rl.question("\nHello " + player.name + "! These are your pokemon: \n\n" 
      + "1. " + player.deck[0].name + ": " + player.deck[0].damage + " damage \n"
      + "2. " + player.deck[1].name + ": " + player.deck[1].damage + " damage \n"
      + "3. " + player.deck[2].name + ": " + player.deck[2].damage + " damage \n"
      + "\nWhich one do you wanna play? (1, 2, or 3, any other input quits):  \n", 
      function(answer) {
        response = answer

      //Do this based on which card was picked 
      if (response == 1) {
        player.currentCardDamage = player.deck[0].damage
        player.currentCard[0] = (player.deck[0])
        player.deck.splice(player.deck[0], 1)
      } 
      else if (response == 2){
        player.currentCardDamage = player.deck[1].damage
        player.currentCard[0] = (player.deck[1])
        player.deck.splice(player.deck[1], 1)
      }
      else if (response == 3){
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
      else {
        console.log("It's a tie! No one gets any points. \n")
      }
      
      //clears the decks and deal new cards
      player.clearDeck()
      computer.clearDeck()
      gamestart()
    });
}

gamestart()