var chalk = require('chalk')

var sun = chalk.yellow(" \\ /\n"+ "--O--\n"+ " / \\\n")

var cloud = chalk.grey(" (__)\n"+ "(_(__)\n")

var rain = cloud + chalk.cyan(" \\ \\ \\\n")

var snow = cloud + chalk.white(" * * *\n")

module.exports = {
  sun: sun,
  cloud: cloud,
  rain: rain,
  snow: snow
};
