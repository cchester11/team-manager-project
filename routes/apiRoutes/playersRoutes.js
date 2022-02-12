const router = require('express').Router();
const { filterByQuery, createNewPlayer } = require('../../lib');
const players = require('../../data/players.json');

// all routes begin with prefix /api

// working api get route for all players in json file
router.get('/players', (req, res) => {
  res.header("Content-Type", "application/json")
  res.send(JSON.stringify(players))
})

module.exports = router;