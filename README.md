ng-three-viewer
===============

## Overview
This project demonstrates two approaches (v1 & v2) to create an AngularJS and Three.js app.  You can view the accompanying presentation on [Google Slides](http://goo.gl/R1BPLz).

Both approaches create the same app, a simple 3D model viewer.

### v1 Approach
* Most common Angular pattern (angularjs.org docs demonstrate this approach)
* Uses grunt to uglify / minify
* Uses Angular factories, services, filters, directives
* Bootstraps components from ng-controller in DOM

### v2 Approach
* Prototypal Pattern for Everything!
* Bridge to Angular 2.0
* [Controller as (local scope)](http://toddmotto.com/digging-into-angulars-controller-as-syntax/)
* [Closure Compilation](https://developers.google.com/closure/compiler/)
  * Annotations including @ngInject
  * type checking
  * --angular_pass
  * Dependency chains (goog.provide / goog.require)
  * minification
* No closure pattern (factories).  Services only.
* App.js initialization for all components.


## Getting Started
1. Do a `git pull https://github.com/cubicleDowns/ng-three-viewer.git`
2. You will probably have to install some grunt packages in both the v1 & v2 directories.
  * npm install grunt-package-name
3. Open up the repo and run a server from the ng-three-viewer/ directory
  * grunt serve
  * python -m SimpleHTTPServer
  * or whatever.
4. Browse to SERVER_NAME:PORT
  * Compiled Versions:
    * /v1/dist/
    * /v2/dist/
  * Uncompiled Versions:
    * /v1/
    * /v2/

### v1 Compiling Code
1.  From v1/ `grunt build`
  + Joins all library files into libs.js
  + Minifies and ngAnnnotates
  + Exports the files to /v1/dist/

### v2 Compiling Code
1.  Uncomment 
  * //goog.require('Viewer.Scene'); in app.js
  * //goog.require's in scene.js
2.  From v2/ `grunt`
3.  Will show any warnings or errors from compilation
4.  If no errors, it'll output /v2/dist/app.min.js

### A few Protractor tests for v2 of the app ###

#### Set up: ####
1) Get Protractor:
```sh
npm install -g protractor
```
2) Get Selenium:
```sh
webdriver-manager update
```
3) Start Selenium server:
```sh
webdriver-manager start
```
4) Start the app on localhost:8000. I used ```python -m SimpleHTTPServer```.
5) Run it! cd into test/ directory and run
```sh
protractor conf.js
```
That should launch Chrome and run the tests in it.

#### Files: 
* app.js -- page object containing some element locators and functions.
* test.js -- the tests.
* conf.js -- config file where, well, different options can be specified. 

