// const writeFile = require('../../src/genFile');
const Player = require('./Player').default;
const allPlayerStats = require('./teamStats').default;

let Brian = new Player('Brian', .245)
let Enrique = new Player('Enrique', .336)
let George = new Player('George', .223);

Enrique.getStats();
George.changeBattingAverage(.329);
Brian.changeBattingAverage(.224);

writeFile();
allPlayerStats();