const inquirer = require('inquirer')
const ConfigStore = require('configstore')
const pkg = require('../package.json')

const conf = new ConfigStore(pkg.name)

module.exports = function setup() {

  const city = conf.get('city')
  const token = conf.get('token')

  inquirer.prompt([{
    name: 'city',
    message: 'enter city (' + city + '):\n'
  }, {
    type: 'list',
    name: 'units',
    message: 'choose units',
    choices: [{
      name: 'metric ( Celsius )',
      value: 'metric'
    }, {
      name: 'imperial ( Farenheit )',
      value: 'imperial'
    }]
  }, {
    name: 'token',
    message: 'enter access token for the openweathermap api (' + token + '):\n'
  }], function(answers) {
    !!answers.city && conf.set('city', answers.city);
    !!answers.units && conf.set('units', answers.units);
    !!answers.token && conf.set('token', answers.token);
    console.log('setup complete')
    process.exit(0)
  })

}
