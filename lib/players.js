const fs = require('fs');
const path = require('path');

function filterByQuery(query, playersArray) {
  let filteredResults = playersArray;

  if (query.name) {
    filteredResults = filteredResults.filter(player => player.name === query.name)
  }

  if (query.battingAverage) {
    filteredResults = filteredResults.filter(player => player.battingAverage === query.battingAverage);

  return filteredResults;
  }
}

function createNewPlayer(body, playersArray) {
  const player = body;
  playersArray.push(player);
  fs.writeFyleSync(
    path.join(__dirname, '../data/players.json'),
    JSON.stringify({players: playersArray}, null, 2)
  );
  return player;
}

module.exports = {
  createNewPlayer,
  filterByQuery
}