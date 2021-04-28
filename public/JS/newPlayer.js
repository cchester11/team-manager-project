import Player from './Player';
import teamStats from './teamStats';

const playersArr = [];

const generateNewPlayer = function() {
  
  let playername = $('#playerName')
  .val()
  .trim();

  let playerbattingavg = $('#playerBattingAvg')
  .val()
  .trim();

  let newGuy = new Player(playername, playerbattingavg)
  playersArr.push(newGuy)

  //change playerArray to localStorage

  $('#players-card').append(newGuy)

  $('#playerName').val('')
  $('#playerBattingAvg').val('')

  console.log(playersArr);

  teamStats();
};

$('#addPlayerBtn').on('click', generateNewPlayer);

// export default generateNewPlayer;