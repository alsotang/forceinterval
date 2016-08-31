var assert = require('assert')
var forceinterval = require('..')


describe('test/forceinterval.test.js', function () {
  it('`count` should equal 10', function (done) {
    var count = 0;

    forceinterval(function () {
      count++;
    }, 100)

    var startTime = +new Date()
    while ((new Date - startTime) < 1000) {}

    setTimeout(function () {
      assert(count == 10)
      var startTime = +new Date()
      while ((new Date - startTime) < 1000) {}
    }, 50)

    setTimeout(function () {
      assert(count == 20)
      done()
    }, 1050)
  })
})
