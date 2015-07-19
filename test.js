var test = require('tape')

var rainbow = require('./')

test('gets a rainbow', function (t) {

  var start = 0
  var inc = 10
  var length = 8

  var fixtures = [[
    0, 100, 50,
    45, 100, 50,
    90, 100, 50,
    135, 100, 50,
    180, 100, 50,
    225, 100, 50,
    270, 100, 50,
    315, 100, 50
  ], [
    10, 100, 50,
    55, 100, 50,
    100, 100, 50,
    145, 100, 50,
    190, 100, 50,
    235, 100, 50,
    280, 100, 50,
    325, 100, 50
  ]]
  var numFixtures = fixtures.length

  for (var i = 0; i < numFixtures; i++, start += inc) {
    var colors = rainbow({
      start: start,
      length: length
    })
    var expected = fixtures.shift()
    t.deepEqual([].slice.call(colors.data), expected)
  }

  t.end()
})
