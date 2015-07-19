var defined = require('defined')
var mod = require('mod-op')
var ndarray = require('ndarray')

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
  var value = defined(opts.value, 100)

  var colors = new Float32Array(length * 3)
  for (var c = 0, i = 0; c < colors.length; c++, i += 3) {
    colors[i] = mod(
        (
          (c * step)
          * 360
        )
        + start
      , 360
    )
    colors[i + 1] = saturation
    colors[i + 2] = value
  }

  return ndarray(colors, [length, 3])
}
