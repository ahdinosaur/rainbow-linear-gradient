var test = require('tape')

var rainbow = require('./')

test('gets a rainbow', function (t) {

  var start = 0
  var inc = 10
  var length = 8

  var fixtures = [[
    0, 100, 100,
    45, 100, 100,
    90, 100, 100,
    135, 100, 100,
    180, 100, 100,
    225, 100, 100,
    270, 100, 100,
    315, 100, 100
  ], [
    10, 100, 100,
    55, 100, 100,
    100, 100, 100,
    145, 100, 100,
    190, 100, 100,
    235, 100, 100,
    280, 100, 100,
    325, 100, 100
  ]]
  var numFixtures = fixtures.length

  for (var i = 0; i < numFixtures; i++, start += inc) {
    var colors = rainbow({
      start: start,
      length: length
    })
    var expected = fixtures.shift()
    t.deepEqual([].slice.call(colors), expected)
  }

  t.end()
})
