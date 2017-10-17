# Holly

#### ENVOYsites Gulp build system and boilerplate.

## Requirements
**Node 6 recommended, tested on 6.11.4**

## Install
To get **holly** set up on your static web project, we recommend that NPM 5 or greater is installed on your machine. 

1. Now, open the terminal and `cd` to your project's root directory and install **holly**.

        npm install envoy-holly --save-dev

2. After successful installation, a `gulpfile.js` should automatically be generated at your project's root directory. 

3. Initialize **holly** and answer a few prompts to scaffold starter boilerplate files. 

        gulp init

## Post-Install
After installing **holly**, the following entries should be added to the project's `.gitignore` file.

        /dist
        /node_modules

## Usage

* `gulp`

    Start **holly** in *development* mode. Styles and scripts will *not* be minified. Starts up "watch" task. 

* `gulp --prod`

    Start **holly** in *production* mode. Styles and scripts will be minified.
