const generateNewPlayer = function() {

  // inquirer.prompt ([
  //   {
  //     type: "input",

  //   }
  // ])

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
}

module.exports = generateNewPlayer;