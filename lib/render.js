var Table = require('cli-table')
var icons = require('./icons')
var ConfigStore = require('configstore')
var pkg = require('../package.json')
var conf = new ConfigStore(pkg.name)
var chalk = require('chalk')

module.exports = render

var maps = {
  Snow: 'snow',
  Clear: 'sun',
  Rain: 'rain',
  Clouds: 'cloud'
}
var rainBar = "\u25A0"

function render(data) {

  console.log(
    chalk.cyan(
      '\n                 *** WEATHER IN', conf.get('city')
      .toUpperCase() + ' *** \n'))

  renderToday(data[0])

  renderRestDays(data.slice(1))
}

function renderToday(weather) {
  console.log('today')
  var icon = icons[maps[weather.weather[0].main]]
  console.log(icon);
  console.log('('+ weather.weather[0].description +')');
  console.log('morn: ' + weather.temp.morn)
  console.log('day: ' + weather.temp.day)
  console.log('eve: ' + weather.temp.eve)
}

function renderRestDays(data) {
  var table = new Table({
    head: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat']
  })

  var tableRows = [
    [],
    [],
    []
  ]


  data.forEach(function(weather) {
    tableRows[0].push(weather.temp.day)
    tableRows[1].push(icons[maps[weather.weather[0].main]])
    tableRows[2].push((function() {
      var result = ''
      if (!weather.rain)
        return result

      var times = (Math.min(weather.rain, 1) * 100 / 20)
      for (var i = 0; i < times; i++) {
        result += rainBar
      }
      return chalk.cyan(result)
    })())
  })

  table.push(tableRows[0])
  table.push(tableRows[1])
  table.push(tableRows[2])


  console.log(table.toString() + '\n')

}

function getWeekDays() {
  var days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  new Date()

}
