const timer = {
  secondsPassed: 0,
  minsPassed: 0,

  startTimer() {
    setInterval(
      function () {
        console.log(this.secondsPassed);
        this.secondsPassed++;
      }.bind(this),
      1000
    );
  },
  stopTimer() {},
  getTimer() {},
  resetTimer() {},
};

timer.startTimer();
