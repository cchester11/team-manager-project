import Player from './Player';
import teamStats from './teamStats';

const $playerAdd = document.getElementById('addPlayerBtn');

const getPlayer = (formData = {}) => {

}

const generateNewPlayer = function(event) {
  event.preventDefault();

  const playersArr = [];

  const playername = $('#playerName').value;

  const playerbattingavg = $('#playerBattingAvg').value;

  new Player = (playername, playerbattingavg);

  playersArr.push({ Player });

  const playersObject = { playersArr }

  getPlayers(playersObject);

  //change playerArray to localStorage

  $('#players-card').append(playersObject)

  $('#playerName').val('')
  $('#playerBattingAvg').val('')

  console.log(playersArr);

  teamStats();
};

$playerAdd.addEventListener('submit', generateNewPlayer);

// export default generateNewPlayer;