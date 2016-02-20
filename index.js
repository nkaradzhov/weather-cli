#!/usr/bin/env node

var program = require('commander')
var inquirer = require('inquirer')
var weather = require('./lib/weather.js');
var setup = require('./lib/setup.js');
var isSetup = false

program
  .version('0.0.1')

program
  .command('setup')
  .description('run setup command')
  .action(function() {
    isSetup = true
    setup()
  })

program
  .parse(process.argv)

if (!isSetup)
  weather()
