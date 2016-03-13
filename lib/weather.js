const fetch = require('./fetch');
const render = require('./render/render.js');
const ConfigStore = require('configstore');
const pkg = require('../package.json');

const conf = new ConfigStore(pkg.name)

module.exports = go;

function go() {

  const city = conf.get('city')
  const token = conf.get('token')
  const units = conf.get('units')

  if (!city || !units || !token) {
    console.log('please run setup first');
    process.exit(0)
  }

  fetch(city, units, token)
    .then(render)
    .then(process.exit)
    .catch(console.log)

}
