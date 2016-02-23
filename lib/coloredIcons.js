const chalk = require('chalk');
const icons = require('./icons');

function color(icon, colors) {
  return icon.split('\n')
    .map(function(line, i) {
      return colors[i](line)
    })
    .join('\n')
}


module.exports = {
  sun: color(icons.sun, [chalk.yellow,chalk.yellow,chalk.yellow]),
  cloud: color(icons.cloud, [chalk.grey,chalk.grey,chalk.grey]),
  rain: color(icons.rain, [chalk.grey,chalk.grey,chalk.cyan]),
  snow: color(icons.snow, [chalk.grey,chalk.grey,chalk.white])
};
