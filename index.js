function forceinterval(fn, time) {
  var lastRunTime = new Date();

  return setInterval(function () {
    var currentTime = new Date()
    if ((new Date - lastRunTime) < time) {
      fn();
    } else {
      var count = ~~((new Date - lastRunTime) / time)
      for (var i = 0; i < count; i++) {
        fn()
      }
    }

    lastRunTime = currentTime;
  }, time)
}

exports = module.exports = forceinterval
