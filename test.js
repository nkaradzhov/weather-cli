// const icons = require('./lib/icons');
const icons = require('./lib/coloredIcons');
var numbers = [
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
  comma: 'o  \n   \n , ',
  space: '   \n   \n   '
}


// numbers
//   .forEach(function (n) {
//     console.log(n)
//   })

function render() {
  var res = []
  var args = Array.prototype.slice.call(arguments);
  args.forEach(function (item) {
    item.split('\n').forEach(function (part, i) {
      if(!res[i])
        res[i] = ''
      res[i] += part
    })
  })
  console.log(res.join('\n'));
}

Object.keys(icons).forEach(function (icon) {
  render(icons[icon], helpers.space, numbers[2], numbers[0],  helpers.comma, helpers.celsius)
})
