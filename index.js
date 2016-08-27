var defined = require('defined')
var mod = require('mod-op')
var Ndarray = require('ndarray')

module.exports = rainbowGradient

function rainbowGradient (opts) {
  opts = defined(opts, {})

  var start = defined(opts.start, 0)
  var step = defined(opts.step, 1)
  var length = defined(opts.length, 10)

  var step = opts.step
  if (typeof step === 'function') {
    step = step(length)
  } else if (step == null) {
    step = 1 / length
  }

  var saturation = defined(opts.saturation, 100)
  var lightness = defined(opts.lightness, 50)

  var ndarray = opts.ndarray || Ndarray(
    new Float32Array(length * 3),
    [length, 3]
  )

  return createRainbowGradient(start, step, length, saturation, lightness, ndarray)
}

function createRainbowGradient (start, step, length, saturation, lightness, ndarray) {
  var data = ndarray.data

  for (var c = 0, i = 0; c < data.length; c++, i += 3) {
    data[i] = mod(
      (
        (
          (c * step)
          * 360
        )
        + start
      ), 360
    )
    data[i + 1] = saturation
    data[i + 2] = lightness
  }

  ndarray.format = 'hsl'

  return ndarray
}
