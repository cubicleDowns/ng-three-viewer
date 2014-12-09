'use strict';

goog.provide('ThreeViewer.FileLoaderController');

/**
 * Service which initiates the THREE.js scene and
 *  provides methods to interact with that scene
 *
 * @param {angular.$scope} $scope
 * @param {ThreeViewer.MessageBus} MessageBus
 * @param {ThreeViewer.ViewerService} ViewerService
 * @param {ThreeViewer.StorageService} StorageService
 *
 * @constructor
 * @export
 * @ngInject
 */
ThreeViewer.FileLoaderController = function ($scope, MessageBus, ViewerService, StorageService) {

    this.scope = $scope;
    this.MessageBus = MessageBus;
    this.ViewerService = ViewerService;
    this.StorageService = StorageService;

    // visibility of the overall app and individual tabs
    /**
     * @type {{recent: boolean, loadJS: boolean, loadGLTF: boolean, loadOBJ: boolean}}
     */
    this.state = {
        'recent': true,
        'loadJS': false,
        'loadGLTF': false,
        'loadOBJ': false
    };

    /**
     * @type {{selectedModel: null, recent: Object, obj: null, mtl: null, name: null, url: null, gltfname: null, jsurl: null, jsname: null}}
     */
    this.data = {
        'selectedModel': null,
        'recent': null,
        'obj': null,
        'mtl': null,
        'name': null,
        'url': null,
        'gltfname': null,
        'jsurl': null,
        'jsname': null
    };

    this.init();
};

/**
 * Executes anything after construction.
 */
ThreeViewer.FileLoaderController.prototype.init = function () {
    this.data.recent = this.StorageService.getAllFiles();
    this.listeners();
};

ThreeViewer.FileLoaderController.prototype.listeners = function () {
    this.scope.$on('updatedHistory', function () {
       this.populateHistory();
    }.bind(this));

    this.scope.$on('appReady', function () {
        this.loadSample();
    }.bind(this));
};


/**
 * Toggles the selected tab
 * @export
 * @param {!string} tab
 */
ThreeViewer.FileLoaderController.prototype.showTab = function (tab) {
    this.state.recent = false;
    this.state.loadJS = false;
    this.state.loadGLTF = false;
    this.state.loadOBJ = false;
    this.state[tab] = true;
};

/**
 * @export
 *
 * Load a selected file from the recent menu
 *      In lieu of creating a bunch of extra variables,
 *      I assign the selected item's data to the current
 *      scope and call the load function for that model.
 */
ThreeViewer.FileLoaderController.prototype.loadSelectedFile = function () {
    var item = this.data.selectedModel;
    if(item.type == "obj"){
        this.data.obj = item.obj;
        this.data.name = item.name;
        this.loadOBJ();
    } else if(item.type == "objmtl"){
        this.data.obj = item.obj;
        this.data.mtl = item.mtl;
        this.data.name = item.name;
        this.loadOBJMTL();
    } else if(item.type == "JSON"){
        this.data.jsurl = item.url;
        this.data.jsname = item.name;
        this.loadJSON();
    } else if(item.type == "glTF"){
        this.data.url = item.url;
        this.data.gltfname = item.name;
        this.loadglTF();
    }
    this.MessageBus.trigger('hideLoader');
};

/**
 *  @export
 *
 * Load an OBJ file
 *  http://en.wikipedia.org/wiki/Wavefront_.obj_file
 */
ThreeViewer.FileLoaderController.prototype.loadOBJ = function () {
    if(this.data.obj && this.data.name){
        var info = {
            'obj': this.data.obj,
            'name': this.data.name,
            'type': 'obj'
        };

        this.ViewerService.loadOBJ (info);
        this.StorageService.saveFile(info);
        this.clearOut();
        this.MessageBus.trigger('hideLoader');
    } else {
        alert('need obj url and a name');
    }
};

/**
 * @export
 */
ThreeViewer.FileLoaderController.prototype.loadSampleOBJ = function () {
    this.data.obj = SETUP.SAMPLES.OBJURL;
    this.data.name = SETUP.SAMPLES.OBJNAME;
    this.loadOBJ();
};

/**
 *  @export
 *
 * Load an OBJ file and it's MTL file.
 *  http://en.wikipedia.org/wiki/Wavefront_.obj_file
 */
ThreeViewer.FileLoaderController.prototype.loadOBJMTL = function (){
    if(this.data.obj && this.data.mtl && this.data.name){

        var info = {
            'obj': this.data.obj,
            'mtl': this.data.mtl,
            'name': this.data.name,
            'type': 'objmtl'
        };

        this.ViewerService.loadOBJMTL(info);
        this.StorageService.saveFile(info);
        this.MessageBus.trigger('hideLoader');

        this.clearOut();

    } else {
        alert('need obj, mtl and name');
    }
};

/**
 * @export
 */
ThreeViewer.FileLoaderController.prototype.loadSampleOBJMTL = function () {
    this.data.obj = SETUP.SAMPLES.OBJURL;
    this.data.mtl = SETUP.SAMPLES.MTLURL;
    this.data.name = SETUP.SAMPLES.OBJMTLNAME;
    this.loadOBJMTL();
};

/**
 * @export
 *
 * Load a glTF file
 *  https://www.khronos.org/gltf
 *  FIXME:  Add animation support
 */
ThreeViewer.FileLoaderController.prototype.loadglTF = function () {
    if (this.data.url && this.data.gltfname) {

        var info = {
            'url': this.data.url,
            'name': this.data.gltfname,
            'type': 'glTF'
        };

        this.ViewerService.loadGLTF(info);
        this.StorageService.saveFile(info);
        this.clearOut();
        this.MessageBus.trigger('hideLoader');
    } else {
        alert('URL to a glTF file and a unique name required');
    }
};

/**
 * @export
 */
ThreeViewer.FileLoaderController.prototype.loadSampleglTF = function () {
    this.data.url = SETUP.SAMPLES.GLTFURL;
    this.data.gltfname = SETUP.SAMPLES.GLTFNAME;
    this.loadglTF();
};

/**
 * @export
 *
 * Load a JSON file
 *  https://github.com/mrdoob/three.js/wiki
 */
ThreeViewer.FileLoaderController.prototype.loadJSON = function () {
    if (this.data.jsurl && this.data.jsname) {

        var info = {
            'url': this.data.jsurl,
            'name': this.data.jsname,
            'type': 'JSON'
        };

        this.ViewerService.loadJSON(info);
        this.StorageService.saveFile(info);
        this.clearOut();
        this.MessageBus.trigger('hideLoader');
    } else {
        alert('URL to a JSON file and a unique name required');
    }
};

/**
 * @export
 */
ThreeViewer.FileLoaderController.prototype.loadSampleJSON = function () {
    this.data.jsurl = SETUP.SAMPLES.JSONURL;
    this.data.jsname = SETUP.SAMPLES.JSONNAME;
    this.loadJSON();
};

/**
 * @export
 */
ThreeViewer.FileLoaderController.prototype.clearRecent = function () {
    this.StorageService.clear();
};

ThreeViewer.FileLoaderController.prototype.clearOut = function() {
        this.data.obj = null;
        this.data.mtl = null;
        this.data.name = null;
        this.data.url = null;
        this.data.gltfname = null;
        this.data.scale = 1.0;
        this.data.yOffset = 0;
        this.data.zOffset = 0;
        this.data.jsurl = null;
        this.data.jsname = null;
        this.data.selectedModel = this.data.recent[0];
};

ThreeViewer.FileLoaderController.prototype.populateHistory = function() {
        this.data.recent = this.StorageService.getAllFiles();
};

ThreeViewer.FileLoaderController.prototype.loadSample = function() {
    var info = {
        'obj': SETUP.SAMPLES.OBJURL,
        'mtl': SETUP.SAMPLES.MTLURL,
        'name': SETUP.SAMPLES.OBJMTLNAME,
        'type': 'objmtl'
    };

    this.ViewerService.loadOBJMTL(info);
    this.StorageService.saveFile(info);
};

