module.exports = () => {
  let timerID,
    counter = 0,
    _resolve = null;
  return {
    start: (totalSce) => {
      return new Promise((resolve, reject) => {
        _resolve = resolve;
        timerID = setInterval(() => {
          if (counter == totalSce) {
            _resolve();
            clearInterval(timerID);
          }
          counter++;
          // console.log('counter:' + counter);
        }, 1000);
      });
    },
    stop: () => {
      // console.log('cancel promise');
      clearInterval(timerID);
      _resolve();
    },
  };
};
