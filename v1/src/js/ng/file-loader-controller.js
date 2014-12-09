'use strict';

ThreeViewer.controller('FileLoaderController', ['$scope', 'MessageBus', 'ViewerFactory', 'StorageService', function ($scope, MessageBus, ViewerFactory, StorageService){

    $scope.firstTime = true;

    // visibility of the overall app and individual tabs
    /**
     * @type {{recent: boolean, loadJS: boolean, loadGLTF: boolean, loadOBJ: boolean}}
     */
    $scope.state = {
        'recent': true,
        'loadJS': false,
        'loadGLTF': false,
        'loadOBJ': false
    };

    /**
     * @type {{selectedModel: null, recent: Object, obj: null, mtl: null, name: null, url: null, gltfname: null, jsurl: null, jsname: null}}
     */
    $scope.data = {
        'selectedModel': null,
        'recent': StorageService.getAllFiles(),
        'obj': null,
        'mtl': null,
        'name': null,
        'url': null,
        'gltfname': null,
        'jsurl': null,
        'jsname': null
    };


    /**
     * Toggles the selected tab.
     * @export
     * @param {!string} tab
     */
    $scope.showTab = function (tab) {
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
    $scope.loadSelectedFile = function () {
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
        MessageBus.trigger('hideLoader');
    };

    /**
     *  @export
     *
     * Load an OBJ file
     *  http://en.wikipedia.org/wiki/Wavefront_.obj_file
     */
    $scope.loadOBJ = function () {
        if(this.data.obj && this.data.name){
            var info = {
                'obj': this.data.obj,
                'name': this.data.name,
                'type': 'obj'
            };

            ViewerFactory.loadOBJ (info);
            StorageService.saveFile(info);
            clearOut();
            MessageBus.trigger('hideLoader');
        } else {
            alert('need obj url and a name');
        }
    };

    /**
     * @export
     */
    $scope.loadSampleOBJ = function () {
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
    $scope.loadOBJMTL = function (){
        if(this.data.obj && this.data.mtl && this.data.name){

            var info = {
                'obj': this.data.obj,
                'mtl': this.data.mtl,
                'name': this.data.name,
                'type': 'objmtl'
            };

            ViewerFactory.loadOBJMTL(info);
            StorageService.saveFile(info);
            MessageBus.trigger('hideLoader');

            clearOut();

        } else {
            alert('need obj, mtl and name');
        }
    };

    /**
     * @export
     */
    $scope.loadSampleOBJMTL = function () {
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
    $scope.loadglTF = function () {
        if (this.data.url && this.data.gltfname) {

            var info = {
                'url': this.data.url,
                'name': this.data.gltfname,
                'type': 'glTF'
            };

            ViewerFactory.loadGLTF(info);
            StorageService.saveFile(info);
            clearOut();
            MessageBus.trigger('hideLoader');
        } else {
            alert('URL to a glTF file and a unique name required');
        }
    };

    /**
     * @export
     */
    $scope.loadSampleglTF = function () {
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
    $scope.loadJSON = function () {
        if (this.data.jsurl && this.data.jsname) {

            var info = {
                'url': this.data.jsurl,
                'name': this.data.jsname,
                'type': 'JSON'
            };

            ViewerFactory.loadJSON(info);
            StorageService.saveFile(info);
            clearOut();
            MessageBus.trigger('hideLoader');
        } else {
            alert('URL to a JSON file and a unique name required');
        }
    };

    /**
     * @export
     */
    $scope.loadSampleJSON = function () {
        this.data.jsurl = SETUP.SAMPLES.JSONURL;
        this.data.jsname = SETUP.SAMPLES.JSONNAME;
        this.loadJSON();
    };

    /**
     * @export
     */
    $scope.clearRecent = function () {
        StorageService.clear();
    };

    function clearOut() {
        $scope.data.obj = null;
        $scope.data.mtl = null;
        $scope.data.name = null;
        $scope.data.url = null;
        $scope.data.gltfname = null;
        $scope.data.scale = 1.0;
        $scope.data.yOffset = 0;
        $scope.data.zOffset = 0;
        $scope.data.jsurl = null;
        $scope.data.jsname = null;
        $scope.data.selectedModel = $scope.data.recent[0];
    }

    function populateHistory() {
       $scope.data.recent = StorageService.getAllFiles();
    }

    function loadSample() {
        var info = {
            'obj': SETUP.SAMPLES.OBJURL,
            'mtl': SETUP.SAMPLES.MTLURL,
            'name': SETUP.SAMPLES.OBJMTLNAME,
            'type': 'objmtl'
        };

        ViewerFactory.loadOBJMTL(info);
        StorageService.saveFile(info);
    }

    $scope.$on('updatedHistory', function () {
        populateHistory();
    });

    $scope.$on('appReady', function () {
       loadSample();
    });

}]);