const Player = require('../public/assets/JS/Player');

test('creates a new player object', () => {
  const Brian = new Player('Brian', '.234');

  expect(Brian.name).toBe('Brian');
  expect(Brian.battingAverage).toBe('.234');
})

