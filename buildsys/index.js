/**
 * ./buildsys/index.js
 * Index of buildsys. Handles autoloading of all tasks and setting up environment.
 * @author Keenan Staffieri
 */

import gulp from 'gulp'
import fs from 'fs'

// Grab command line arguments
const argv = require('yargs').argv

/**
 * Globals
 */

// Set build environment (dev or prod)
global.env = argv.prod ? 'prod' : 'dev'

// Make gulp globally accessible
global.gulp = gulp

/**
 * Require all gulp tasks...
 */
const tasks = fs.readdirSync('./buildsys/tasks/')
tasks.forEach(function (task) {
  if (/\.js/.test(task)) {
    console.log(`Requiring task ${task}...`)
    require(`./tasks/${task}`)
  }
})

/**
 * Require gulp commands
 */
require('./commands')
