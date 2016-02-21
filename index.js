#!/usr/bin/env node

var program = require('commander')
var weather = require('./lib/weather.js')
var setup = require('./lib/setup.js')
var pkg = require('./package.json')
var isSetup = false

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
