'use strict';

ThreeViewer.controller('AppController', ['$scope', 'ViewerFactory', function ($scope, ViewerFactory) {

    // Initialize the Viewer factory with the container ID information.
    // This is done via the AppController bootstrap.
    // There are other ways to do this but this works for this pattern.
    ViewerFactory.init({
        canvasId: 'viewer',
        containerId: 'container'
    });

    // toolbar visibility
    $scope.tb = {
        'about': false,
        'visible': true,
        'loader': true
    };

    // default data for the input fields
    $scope.data = {
        'scale': 1,
        'rotateX': 0,
        'rotateY': 0,
        'rotateZ': 0,
        'positionX': 0,
        'positionY': 0,
        'positionZ': 0
    };

    // toggle visibility of the loader
    $scope.toggleLoader = function () {
        this.tb.about = false;
        this.tb.loader = !this.tb.loader;
    };

    // force hide the about page.
    $scope.hideAbout = function () {
        this.tb.about = false;
    };

    // toggle the toolbar
    $scope.toggleToolbar = function () {
        this.tb.about = false;
        this.tb.visible = !this.tb.visible;
    };

    // force show the about page.
    $scope.showAbout = function () {
        this.tb.loader = false;
        this.tb.visible = false;
        this.tb.about = true;
    };

    // force hide the loader
    $scope.hideLoader = function () {
        this.tb.loader = false;
    };

    // force hide the toolbar
    $scope.hideToolbar = function () {
        this.tb.visible = false;
    };

    /**
     * Scale the model.
     */
    $scope.scale = function () {
        ViewerFactory.scale(this.data.scale);
    };

    /**
     * Rotate around an axis
     */
    $scope.rotate = function () {
        ViewerFactory.rotate(
            parseFloat(this.data.rotateX),
            parseFloat(this.data.rotateY),
            parseFloat(this.data.rotateZ))
    };

    /**
     * Translate around the scene
     */
    $scope.translate = function () {
        ViewerFactory.translate(
            parseFloat(this.data.positionX),
            parseFloat(this.data.positionY),
            parseFloat(this.data.positionZ))
    };

    $scope.$on('hideLoader', function () {
        $scope.tb.loader = false;
    });
}]);