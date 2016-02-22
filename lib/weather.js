var fetch = require('./fetch');
var render = require('./render.js');
var ConfigStore = require('configstore');
var pkg = require('../package.json');

var conf = new ConfigStore(pkg.name)

module.exports = go;

function go() {

  var city = conf.get('city')
  var token = conf.get('token')

  if (!city || !token) {
    console.log('please run setup first');
    process.exit(0)
  }

  fetch(city, token)
    .then(render)
    .then(process.exit)
    .catch(console.log)

}
