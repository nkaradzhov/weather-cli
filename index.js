#!/usr/bin/env node

const program = require('commander')
const weather = require('./lib/weather.js')
const setup = require('./lib/setup.js')
const pkg = require('./package.json')
let isSetup = false

program
  .version(pkg.version)

program
  .command('setup')
  .description('setup city and access token for the openweathermap api')
  .action(function() {
    isSetup = true
    setup()
  })

program
  .parse(process.argv)

if (!isSetup)
  weather()
