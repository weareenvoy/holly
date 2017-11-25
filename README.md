# Holly

#### ENVOYsites Gulp build system and boilerplate.

## Requirements
**Node 8 recommended, tested on 8.9**

## Install
To get **holly** set up on your static web project, we recommend that NPM 5 or greater is installed on your machine.

To check the installed version of NPM, run:

        npm -v

To upgrade NPM to the latest, run:

        npm install -g npm

1. Now, open the terminal and `cd` to your project's root directory and install **holly**.

        npm install envoy-holly --save-dev

2. After successful installation, a `gulpfile.js` and `.gitignore` should be generated automatically at your project's root directory.

3. Initialize **holly** and answer a few prompts to scaffold starter boilerplate files.

        gulp init

## Usage

* `gulp`

    Start **holly** in *development* mode. Styles and scripts will *not* be minified. Starts up "watch" task.

* `gulp --prod`

    Start **holly** in *production* mode. Styles and scripts will be minified.
