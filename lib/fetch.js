var request = require('request')
var Promise = require('bluebird')

module.exports = fetch

function fetch(address, token) {

  var url =
    'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + address + '&units=metric&cnt=7&appid=' + token

  return new Promise(function(resolve, reject) {
    request(url, function(err, res, b) {
      var body = JSON.parse(b)
      console.log('Weather in ', body.city.name)

      var weekdays = [
        'Sun.',
        'Mon.',
        'Tue.',
        'Wed.',
        'Thu.',
        'Fri.',
        'Sat.'
      ]

      var days = []

      var data = [
        [],
        [],
        []
      ]

      body.list.forEach(function(weather) {
        days.push(weekdays[new Date(weather.dt * 1000)
          .getDay()])
        data[0].push(weather.temp.min)
        data[1].push(weather.temp.max)
        data[2].push(weather.weather[0].main)
      })

      resolve({
        head: days,
        data: data
      })

    })
  })

}
