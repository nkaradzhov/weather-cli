const chalk = require('chalk')
const numbers = [
  ' _ \n| |\n|_|',
  '   \n  |\n  |',
  ' _ \n _|\n|_ ',
  ' _ \n _|\n _|',
  '   \n|_|\n  |',
  ' _ \n|_ \n _|',
  ' _ \n|_ \n|_|',
  ' _ \n  |\n  |',
  ' _ \n|_|\n|_|',
  ' _ \n|_|\n _|'
]

const helpers = {
  celsius: ' _ \n|  \n|_ ',
  kelvin: '   \n|/ \n|\\ ',
  degree: 'o  \n   \n   ',
  space: '   \n   \n   ',
  minus: '   \n  _\n   '
}

module.exports = {
  temperature: temperature,
  orderMultiline: orderMultiline
}

function orderMultiline() {
  const res = []
  const args = [].concat.apply([], Array.prototype.slice.call(arguments));

  args.forEach(function(item) {
    item.split('\n')
      .forEach(function(part, i) {
        if (!res[i])
          res[i] = ''
        res[i] += part
      })
  })
  return res.join('\n')
}

function temperature(temp) {
  const result = [helpers.space].concat(
      digits(Math.abs(Math.round(temp)))
      .map(multiLine)
    )
    .concat(helpers.degree)

  return temp < 0 ? [helpers.minus].concat(result) : result;
}

function multiLine(digit) {
  return numbers[digit]
}

function digits(number) {
  return String(number)
    .split('')
    .map(Number)
}
