## forceinterval

Auto execute omitted `setInterval` cycle

## install

`npm install forceinterval`

## description

For many webpage, we have some `setInterval` logic in it, but sometimes some heavy compute occurs, then the `setInterval` logic would show wrong result for us. Such as clock chart, or some animation.

`forceInterval` can replace `setInterval` in many scenes seamlessly, and its usecase is common. So I hope this function can be added in lodash.

## example

```js
var forceinterval = require('forceinterval')
var count = 0;

forceinterval(function addTask() {
  count++;
}, 100)

var startTime = +new Date()
while ((new Date - startTime) < 1000) {}

setTimeout(function () {
  // !!!This is the point. After block,
  // forceinterval auto run `addTask` 10 times.
  assert(count == 10)
  done()
}, 50)
```
