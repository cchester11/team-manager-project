const fs = require('fs')

const data = require('../../../data/players.json')
data.table = []

class Player {
  constructor(name, battingAverage) {
    this.name = name;
    this.battingAverage = battingAverage;
    // send new player to players.json
    // look up 'how to send a constructed object to a .json file locally
    let obj = {
      name: this.name,
      battingAverage: this.battingAverage
    }

    data.table.push(obj)
    
    fs.writeFile('players.json', JSON.stringify(data), (err) => {
      if(err) {
        throw new Error(err)
      }

      console.log('file overwritten with new data')
    })
  }

  getStats() {
      console.table({
        name: this.name,
        battingAverage: this.battingAverage
      });
    }

  changeBattingAverage(average) {
        this.battingAverage = average;
    }
};

export default Player;