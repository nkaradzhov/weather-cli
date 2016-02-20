var Table = require('cli-table')
var icons = require('./icons')
var ConfigStore = require('configstore')
var pkg = require('../package.json')
var conf = new ConfigStore(pkg.name)
var chalk = require('chalk')

module.exports = render

function render(data) {

  data.head[0] = 'Today'

  var table = new Table({
    head: data.head
  })

  data.data[2] = data.data[2].map(function(d) {
    var maps = {
      Snow: 'snow',
      Clear: 'sun',
      Rain: 'rain',
      Clouds: 'cloud'
    }
    return maps[d] ? icons[maps[d]] : d
  })

  data.data.forEach(function(d) {
    table.push(d)
  })

  console.log(
    chalk.cyan(
      '\n                 *** WEATHER IN', conf.get('city')
      .toUpperCase() + ' *** \n'))

  console.log(table.toString() + '\n')
  return
}
