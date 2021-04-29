import Player from './Player';
import teamStats from './teamStats';

const $playerAdd = document.getElementById('addPlayerBtn')

const playersArr = [];

const generateNewPlayer = function(event) {
  event.preventDefault();
  
  const playername = $('#playerName')
  .val()
  .trim();

  const playerbattingavg = $('#playerBattingAvg')
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

$playerAdd.addEventListener('submit', generateNewPlayer);

// export default generateNewPlayer;