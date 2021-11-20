import Player from './Player';
import teamStats from './teamStats';

const addPlayer = document.getElementById('addPlayerBtn');

const savePlayer = localStorage.setItem('player', JSON.stringify(playername, playerbattingavg))
const getPlayer = localStorage.getItem('player')

// pass this function into an event listener for the addPlayer variable
const generateNewPlayer = function(event) {
  event.preventDefault();

  // grab values from form input of the DOM
  const playername = $('#playerName').value;
  const playerbattingavg = $('#playerBattingAvg').value;

  // create a new player for the backend (our players.json file)
  new Player = (playername, playerbattingavg);

  // create DOM elements to pass values into
  const playernameFig = $('<figure>')
  playernameFig.text(playername)
  const playerbattingavgFig = $('<figure>')
  playerbattingavgFig.text(playerbattingavg)

  savePlayer()

  // append the array of players to the players-card element
  $('#players-card').append(playernameFig)
  $('#players-card').append(playerbattingavgFig)

  // empty to values of both of these input elements
  $('#playerName').val('')
  $('#playerBattingAvg').val('')

  getPlayer()
  //console.table the team info using this function
  teamStats();
};


addPlayer.addEventListener('submit', generateNewPlayer);

// export default generateNewPlayer;