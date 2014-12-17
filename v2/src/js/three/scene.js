goog.provide('Viewer.Scene');
//goog.require('Viewer.Util');
//goog.require('Viewer.Wrangler');
//goog.require('Viewer.Setup');
//goog.require('Viewer.Cameras');

Viewer.Scene = function (params) {

    this.parentContainer = $('#' + params.containerId);
    this.container = document.getElementById(params.canvasId);
    this.jqContainer = $('#' + params.canvasId);

    this.context = params.context;

    this.WIDTH = this.container.width;
    this.HEIGHT = this.container.height;

    this.wrangler = null;
    this.scene = null;
    this.projector = null;
    this.renderer = null;
    this.setup = null;
    this.cameras = null;
    this.controls = null;
    this.raycaster = null;

    this.init();

};

Viewer.Scene.prototype = {

    init: function () {

    var params = {context: this};

        this.scene = new THREE.Scene();
        this.projector = new THREE.Projector();
        this.renderer = new THREE.WebGLRenderer({canvas: this.container, antialias: true});
        this.wrangler = new Viewer.Wrangler(params);
        this.setup = new Viewer.Setup(params);
        this.cameras = new Viewer.Cameras(params);
        this.controls = new THREE.OrbitControls( this.cameras.liveCam, this.container );
        this.raycaster = new THREE.Raycaster();
        this.wrangler.init();
        this.listeners();
    },


    listeners: function () {
        var to = null;
        window.addEventListener( 'resize', function(){

            // if timeout already set, clear it so you can set a new one
            // this prevents N resize events from resizing the canvas
            if(to){
                clearTimeout(to);
            }
            to = setTimeout(function () {
                this.onWindowResize();
            }.bind(this), 100);
        }.bind(this), false );

        $(document).on('mediaready', function (e) {
            this.scene.add(e.mesh);
        }.bind(this));
    },

    /**
    * Resizes the camera when document is resized.
    */
    onWindowResize: function () {

        this.WIDTH = window.innerWidth;
        this.HEIGHT = window.innerHeight;
        this.cameras.liveCam.aspect = this.WIDTH / this.HEIGHT;
        this.cameras.liveCam.updateProjectionMatrix();
        this.renderer.setSize(this.WIDTH, this.HEIGHT);
        this.renderer.setViewport(0, 0, this.WIDTH, this.HEIGHT);
    }
};
