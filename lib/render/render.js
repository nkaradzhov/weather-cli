const Table = require('cli-table')
const chalk = require('chalk')
const icons = require('./icons');
const temperature = require('./renderUtils')
  .temperature
const orderMultiline = require('./renderUtils')
  .orderMultiline

const maps = {
  Snow: 'snow',
  Clear: 'sun',
  Rain: 'rain',
  Clouds: 'cloud'
}

const rainBar = "\u25A0"

module.exports = render

function render(data) {

  renderHeader(data.city)

  renderToday(data.list[0])

  renderDays(data.list.slice(1))
}

function renderHeader(city) {
  console.log();
  console.log(city.name + ', ' + city.country);
  console.log();
}

function renderToday(weather) {
  const icon = icons[maps[weather.weather[0].main]]
  const temp = temperature(weather.temp.day)
  const rain = weather.rain ? Math.min(weather.rain, 1) * 100 : 0
  const info =
  '\n' + weather.weather[0].description + '\nrain: ' + rain + ' %'

  console.log(orderMultiline(icon, temp, info));
  console.log();
}


function renderDays(data) {
  const d = new Date()
  const table = new Table({
    head: getWeekDays(d.setDate(d.getDate() + 1), 6)
  })
  const tableRows = [
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

      const times = (Math.min(weather.rain, 1) * 100 / 20)
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


function getWeekDays(d, howMany) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const result = []
  const date = new Date(d)

  while (howMany) {
    result.push(days[date.getDay()])
    date.setDate(date.getDate() + 1)
    howMany--
  }
  return result
}
