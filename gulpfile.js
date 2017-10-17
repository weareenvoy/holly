/**
  - - - - -
  H O L L Y
  - - - - -
  ENVOYsites frontend Gulp build system and boilerplate.
  @author ENVOY web development team
 */

/**
  Running TODO List:
  - set up initial twig layouts and partials
  - figure out component structure for templates / js / styles
  - add prettier?
  - add image / svg sprite optimization
  - add gulp notification util on error
  - make better way to extend / override config
  - add more / modify questions when installing for the first time
  - add scaffolding / make commands to add new components or install existing ones
  - create initial single styleguide page with all the base elements
  - optimize local dev environment
  - test prod settings
  - test via node_modules install
  - improve readme
 */

global.config = require('./config')
require('./buildsys')
