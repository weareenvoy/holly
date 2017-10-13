/**
 * Gulp task series commands are defined here.
 * @author Keenan Staffieri
 */

module.exports = [
  'clean', // TODO: Do not clean if not static
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
