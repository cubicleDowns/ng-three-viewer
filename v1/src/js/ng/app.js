'use strict';

var ThreeViewer = angular.module('ThreeViewer', ['ngHammer', 'ngRoute', 'LocalStorageModule'])
    .config(['localStorageServiceProvider',function(localStorageServiceProvider){
        localStorageServiceProvider.setPrefix('ng-three-viewer');
    }]).config(['$locationProvider', function($locationProvider) {
        //gets rid of the hash fragment in URLs.  /#/
        $locationProvider.html5Mode(true);
    }]).config(['$routeProvider', function($routeProvider){

        // this is lazy way to check for Chrome but I love it.
        var _isChrome = (function() {
            return window.chrome;
        });
        // Swap out different HTML based upon whatevs.
        // Sorry, Firefox users.  I really just wanted to get this done.
        $routeProvider
            .when('/', {
                templateUrl: (_isChrome() )? '/v1/dist/partials/chrome.html':'/v1/dist/partials/bad-time.html',
                controller: 'AppController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);

