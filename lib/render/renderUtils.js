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
  orderMultiline: orderMultiline,
  tempColor: tempColor,
  tempColorFormat: tempColorFormat
}

function orderMultiline() {
  const res = []
  const args = [].concat.apply([], Array.prototype.slice.call(arguments));

  args.forEach(function(item) {
    item.split('\n')
      .forEach(function(line, i) {
        if (!res[i])
          res[i] = ''
        res[i] += line
      })
  })
  return res.join('\n')
}

function temperature(temp) {
  const color = tempColor(temp)
  const d = digits(Math.abs(temp))
    .map(multiLine)
    .map(function(val) {
      return val.split('\n')
        .map(function(line) {
          return chalk.bold(tempColorFormat(color, line))
        })
        .join('\n')
    })

  const result = [helpers.space].concat(d)
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

function tempColor(temp) {
  var i, tempcolors = [{ t: -15, c: 21 }, { t: -12, c: 27 }, { t: -9, c: 33 }, { t: -6, c: 39 }, { t: -3, c: 45 }, { t: 0, c: 51 }, { t: 2, c: 50 }, { t: 4, c: 49 }, { t: 6, c: 48 }, { t: 8, c: 47 }, { t: 10, c: 46 }, { t: 13, c: 82 }, { t: 16, c: 118 }, { t: 19, c: 154 }, { t: 22, c: 190 }, { t: 25, c: 226 }, { t: 28, c: 220 }, { t: 31, c: 214 }, { t: 34, c: 208 }, { t: 37, c: 202 }]
  var color = 202
  for (i = 0; i < tempcolors.length; i++) {
    if (temp < tempcolors[i].t) {
      color = tempcolors[i].c
      break;
    }
  }
  return color
}

function tempColorFormat(color, value) {
  return "\033[38;5;" + color + "m" + value + "\033[0m"
}
