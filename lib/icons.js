var chalk = require('chalk')

var sun = " \\ /\n"+ "--O--\n"+ " / \\\n"
// var sun = chalk.yellow(" \\ /\n"+ "--O--\n"+ " / \\\n")

var cloud = " (__)\n"+ "(_(__)\n"
// var cloud = chalk.grey(" (__)\n"+ "(_(__)\n")

var rain = cloud + " \\ \\ \\\n"
// var rain = cloud + chalk.cyan(" \\ \\ \\\n")

var snow = cloud + " * * *\n"
// var snow = cloud + chalk.white(" * * *\n")

module.exports = {
  sun: sun,
  cloud: cloud,
  rain: rain,
  snow: snow
};
