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
  }

  getDeck(){
    for (let i=0; i<3; i++) {
    let randomcard = Math.floor(Math.random()*(deck.length - 1))
    this.deck.push(deck[randomcard])
    deck.splice(randomcard, 1)
}

  }
}
let player = new Game("Dat")
let computer = new Game("Opponent")
player.getDeck()
computer.getDeck()

//Start game
//Player picks a card

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let response

while (player.points < 2 && computer.points <2) {
  rl.question("Hello " Pla, (answer) => {
    response = answer
    if (response == "hi") {
      console.log("Hello friend!")
    }
    else console.log("What is " + answer)
    rl.close()
  })
}

//Computer picks a card

//Game compares the two cards and gives a point to the winner

//Game memorizes score and decides to continue or not

//2 points are achieved the game concludes
