class Player {
  constructor(name, battingAverage) {
    this.name = name;
    this.battingAverage = battingAverage;
    playersArr.push(this);
  }

  getStats() {
      console.table({
        name: this.name,
        battingAverage: this.battingAverage
      });
    }

  changeBattingAverage(average) {
        this.battingAverage = average;
    }
};

export default Player;