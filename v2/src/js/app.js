'use strict';
goog.require('ThreeViewer.ViewerService');
goog.require('ThreeViewer.AppController');
goog.require('ThreeViewer.FileLoaderController');
goog.require('ThreeViewer.Directives');
goog.require('ThreeViewer.Filters');
goog.require('ThreeViewer.MessageBus');
goog.require('ThreeViewer.StorageService');
goog.require('ThreeViewer.Config');
//goog.require('Viewer.Scene');

angular.module('ThreeViewerApp', ['ngHammer', 'ngRoute', 'LocalStorageModule'])
    .config(ThreeViewer.ConfigLocation)
    .config(ThreeViewer.ConfigLocalStorage)
    .config(ThreeViewer.ConfigRouters)
    .directive('select', ['ViewerService', ThreeViewer.SelectDirective.factory])
    .directive('stopEvent', ThreeViewer.StopEventDirective.factory)
    .directive('fileLoader', ThreeViewer.FileLoaderDirective)
    .directive('toolbars', ThreeViewer.ToolbarsDirective)
    .directive('about', ThreeViewer.AboutDirective)
    .filter('forceInt', ThreeViewer.ForceInt.factory)
    .filter('forceFloat', ThreeViewer.ForceFloat.factory)
    .service('StorageService', ['localStorageService', 'MessageBus', ThreeViewer.StorageService])
    .service('MessageBus', ['$rootScope', ThreeViewer.MessageBus])
    .service('ViewerService', ['$timeout', 'MessageBus', ThreeViewer.ViewerService])
    .service('FileLoaderController', ['$scope', 'MessageBus', 'ViewerService', 'StorageService'])
    .controller('AppController', ['$scope', 'ViewerService', ThreeViewer.AppController])
    .controller('FileLoaderController', ['$scope', 'MessageBus', 'ViewerService', 'StorageService', ThreeViewer.FileLoaderController]);
