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

### v1
* Uncompiled: [localhost:8000/v1/](http://localhost:8000/v1/)
* Compiled: [localhost:8000/v1/dist/](http://localhost:8000/v1/dist/)

### v2
* Uncompiled: [localhost:8000/v2/](http://localhost:8000/v2/)
* Compiled: [localhost:8000/v2/dist/](http://localhost:8000/v2/dist/)

### v1 Compiling Code
1.  From v1/ `grunt build`
  + Joins all library files into libs.js
  + Minifies and ngAnnnotates
  + Exports the files to /v1/dist/

### v2 Compiling Code
1.  From v2/ `grunt`
2.  Will show any warnings or errors from compilation
3.  If no errors, it'll output /v2/dist/app.min.js
