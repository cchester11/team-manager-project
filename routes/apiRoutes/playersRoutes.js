const router = require('express').Router();
const { filterByQuery, createNewPlayer } = require('../../lib');
const players = require('../../data/players.json');
const { Players } = require('./Models/Players')

// all routes begin with prefix /api

//pushing json data to the host
router.get('/players', (req, res) => {
  Players.findAll({})
    .then(results => {
      if (req.query) {
        results = filterByQuery(req.query, results);
      };
      res.json(results);
    })
});

//push data from host to JSON
router.post('/players', (req, res) => {
  Players.create({
    where: req.body.id = players.length.toString()
  })
    .then(players => {
      const player = createNewPlayer(req.body, players);
      res.json(player);
    })
})

module.exports = router;