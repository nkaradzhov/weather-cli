const request = require('request')
const Promise = require('bluebird')

module.exports = fetch

function fetch(address, units, token) {

  const url =
    'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + address + '&units=' + units + '&cnt=7&appid=' + token
  return new Promise(function(resolve, reject) {
    request(url, function(err, res, b) {

      if(err) {
        return reject(err)
      }

      const body = JSON.parse(b)

      if(body.cod != 200) {
        return reject(body.message)
      }

      return resolve(body)
    })
  })

}
