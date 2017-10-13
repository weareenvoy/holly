/**
 * Gulp task series commands are defined here.
 * @author Keenan Staffieri
 */

module.exports = [
  [
    'styles',
    'scripts',
    'copy-assets',

    // TODO: Refactor, added for static builds...
    'templates',
    'serve'
  ],
  'rev'
]
