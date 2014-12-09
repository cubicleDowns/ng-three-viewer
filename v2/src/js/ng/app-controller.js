'use strict';
goog.provide('ThreeViewer.AppController');

/**
 *
 * @param {angular.Scope} $scope
 * @param {ThreeViewer.ViewerService} ViewerService
 *
 * @constructor
 * @export
 * @ngInject
 */
ThreeViewer.AppController = function ($scope, ViewerService) {

    this.scope = $scope;
    this.ViewerService = ViewerService;

    /**
     * @expose
     * @type {{about: boolean, visible: boolean, loader: boolean}}
     */
    this.tb = {
        'about': false,
        'visible': true,
        'loader': true
    };

    /**
     * @expose
     * @type {{scale: number, rotateX: number, rotateY: number, rotateZ: number, positionX: number, positionY: number, positionZ: number}}
     */
    this.data = {
        'scale': 1,
        'rotateX': 0,
        'rotateY': 0,
        'rotateZ': 0,
        'positionX': 0,
        'positionY': 0,
        'positionZ': 0
    };

    this.init();
};

ThreeViewer.AppController.prototype.init = function () {
    this.ViewerService.init({
        canvasId: 'viewer',
        containerId: 'container'
    });
    this.listeners();
};

ThreeViewer.AppController.prototype.listeners = function () {

    this.scope.$on('hideLoader', function () {
        this.tb.loader = false;
    }.bind(this));

};

/**
 * @export
 */
ThreeViewer.AppController.prototype.toggleLoader = function () {
    this.tb.about = false;
    this.tb.loader = !this.tb.loader;
};

/**
 * @export
 */
ThreeViewer.AppController.prototype.hideAbout = function () {
    this.tb.about = false;
};

/**
 * @export
 */
ThreeViewer.AppController.prototype.toggleToolbar = function () {
    this.tb.about = false;
    this.tb.visible = !this.tb.visible;
};

/**
 * @export
 */
ThreeViewer.AppController.prototype.showAbout = function () {
    this.tb.loader = false;
    this.tb.visible = false;
    this.tb.about = true;
};

/**
 * @export
 */
ThreeViewer.AppController.prototype.hideLoader = function () {
    this.tb.loader = false;
};

/**
 * @export
 */
ThreeViewer.AppController.prototype.hideToolbar = function () {
    this.tb.visible = false;
};

/**
 * @export
 */
ThreeViewer.AppController.prototype.scale = function () {
    this.ViewerService.scale(this.data.scale);
};

/**
 * Rotate around an axis
 */
ThreeViewer.AppController.prototype.rotate = function () {
    this.ViewerService.rotate(
        parseFloat(this.data.rotateX),
        parseFloat(this.data.rotateY),
        parseFloat(this.data.rotateZ));
};

/**
 * Translate around the scene
 */
ThreeViewer.AppController.prototype.translate = function () {
    this.ViewerService.translate(
        parseFloat(this.data.positionX),
        parseFloat(this.data.positionY),
        parseFloat(this.data.positionZ));
};
