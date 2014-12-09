goog.provide('ThreeViewer.Config');

/**
 * @constructor
 * @ngInject
 */
ThreeViewer.ConfigLocalStorage = function (localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('ng-three-viewer');
};


/**
 * @param {angular.$locationProvider} $locationProvider
 * @constructor
 * @ngInject
 */
ThreeViewer.ConfigLocation = function ($locationProvider){
    $locationProvider.html5Mode = true;
};

/**
 * @param {angular.$routeProvider} $routeProvider
 * @constructor
 * @ngInject
 */
ThreeViewer.ConfigRouters = function ($routeProvider){
    $routeProvider.when('/', {
        templateUrl: (window.chrome) ? '/v2/dist/partials/chrome.html':'/v2/dist/partials/bad-time.html'
    }).otherwise({
        redirectTo: '/'
    });
};