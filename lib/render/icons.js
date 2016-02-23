const chalk = require('chalk');
const icons = {
  sun: "  \\ / \n" + " --O--\n" + "  / \\ ",
  cloud: " (__) \n" + "(_(__)\n      ",
  rain: " (__) \n" + "(_(__)\n \\ \\ \\",
  snow: " (__) \n" + "(_(__)\n * * *"
}


function color(icon, colors) {
  return icon.split('\n')
    .map(function(line, i) {
      return colors[i].bold(line)
    })
    .join('\n')
}


module.exports = {
  sun: color(icons.sun, [chalk.yellow, chalk.yellow, chalk.yellow]),
  cloud: color(icons.cloud, [chalk.grey, chalk.grey, chalk.grey]),
  rain: color(icons.rain, [chalk.grey, chalk.grey, chalk.cyan]),
  snow: color(icons.snow, [chalk.grey, chalk.grey, chalk.white])
};
