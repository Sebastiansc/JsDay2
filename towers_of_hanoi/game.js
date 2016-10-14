const readline = require("readline");

const reader = readline.createInterface({

  input: process.stdin,
  output: process.stdout
});


const Towers = require('./towers.js')

// const handleResponse =

const completionCallback = function() {
  reader.question("Would you like to play?",response => {
    console.log(response)
    if (response === "yes") {
      console.log(this)
      game.run(completionCallback);
    } else {
      reader.close()
    }
  });
}
function test () {
let x = 10;
if (true) {
  x = 12;
  console.log(x);
}
console.log(x);
 }

game = new Towers(reader, completionCallback)

game.run(completionCallback);
