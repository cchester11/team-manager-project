const writeFile = require('./src/genFile')
const playersArr = [];

class Player {
  
constructor (name, battingAverage) { 
  this.name = name;
  this.battingAverage = battingAverage;

  playersArr.push(this)
  }

getStats() {
  console.table({
    name: this.name,
    battingAverage: this.battingAverage
    })
  }

changeBattingAverage(average) {
  this.battingAverage = average;
  }

  //rough sketch of a new player
  generateNewPlayer() {
    document.getElementById('#addPlayerBtn').on('click', (event) => {
      event.preventDefault();
  
      let playername = document.getElementById('#playerName')
      .val()
      .trim();
  
      let playerbattingavg = document.getElementById('#playerBattingAvg')
      .val()
      .trim();
  
      let newGuy = new Player(playername, playerbattingavg)
      playersArr.push(newGuy)
  
      document.getElementById('#players-card').append(newGuy)
  
      document.getElementById('#playerName').val('');
      document.getElementById('#playerBattingAvg').val('')
    })
  }
};

function allPlayerStats() {
  console.table(playersArr)
};

let Brian = new Player('Brian', .245)

let Enrique = new Player('Enrique', .336)

let George = new Player('George', .223)

George.changeBattingAverage(.329);
Brian.changeBattingAverage(.224);

generateNewPlayer();
writeFile();
allPlayerStats();