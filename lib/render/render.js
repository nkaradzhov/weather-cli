const Table = require('cli-table')
const chalk = require('chalk')
const icons = require('./icons');
const temperature = require('./renderUtils')
  .temperature
const orderMultiline = require('./renderUtils')
  .orderMultiline
const tempColor = require('./renderUtils')
  .tempColor
const tempColorFormat = require('./renderUtils')
  .tempColorFormat

const rainBar = "\u25A0"

module.exports = render

function render(data) {

  renderHeader(data.city)

  renderToday(data.list[0])

  renderDays(data.list.slice(1))
}

function renderHeader(city) {
  console.log();
  console.log('   ' + city.name + ', ' + city.country);
  console.log();
}

function renderToday(weather) {
  const icon = findIcon(weather.weather[0].description, weather.weather[0].main)
  const rain = weather.rain ? Math.min(weather.rain, 1) * 100 : 0
  const info =
    '\n' + weather.weather[0].description + '\nrain: ' + rain + ' %'


  const temp = temperature(Math.round(weather.temp.day))
  console.log(orderMultiline(icon, temp, info));
}


function renderDays(data) {
  const d = new Date()
  const table = new Table({
    chars: {
      'top': '-',
      'top-mid': '',
      'top-left': '',
      'top-right': '',
      'bottom': '',
      'bottom-mid': '',
      'bottom-left': '',
      'bottom-right': '',
      'left': '',
      'left-mid': '',
      'mid': '',
      'mid-mid': '',
      'right': '',
      'right-mid': '',
      'middle': ''
    },
    style: {
      'padding-left': 2,
      'padding-right': 0
    }
  })
  const tableRows = [
    [],
    []
  ]

  const weekdays = getWeekDays(d.setDate(d.getDate() + 1), 6)

  data.forEach(function(weather, i) {

    const rounded = Math.round(weather.temp.day)
    const temp = tempColorFormat(tempColor(rounded), rounded)

    tableRows[0].push(
      "\n    " +
      chalk.grey(weekdays[i]) +
      " " +
      chalk.bold(temp) +
      "\n")

    const icon = findIcon(weather.weather[0].description, weather.weather[0].main)

    tableRows[1].push(icon)
  })

  table.push(tableRows[0])
  table.push(tableRows[1])

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

function findIcon(description, fallback) {
  var icon = icons[description.replace(/ /gi, '_')]
  if (!icon) {
    icon = icons[weather.weather[0].main.toLowerCase()]
  }
  return icon
}
