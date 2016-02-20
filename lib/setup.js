var inquirer = require('inquirer')
var ConfigStore = require('configstore')
var pkg = require('../package.json')

var conf = new ConfigStore(pkg.name)

module.exports = function setup() {

  var city = conf.get('city')
  var token = conf.get('token')

  inquirer.prompt([{
    name: 'city',
    message: 'enter city (' + city + '):\n'
  }, {
    name: 'token',
    message: 'enter access token for the openweathermap api (' + token + '):\n'
  }], function(answers) {
    !!answers.city && conf.set('city', answers.city)
    !!answers.token && conf.set('token', answers.token)
    console.log('setup complete')
    process.exit(0)
  })

}
