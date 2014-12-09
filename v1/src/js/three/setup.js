'use strict';

Viewer.Scene = Viewer.Scene || {};

/**
 * Setup the scene geometry
 * @param {Object} params
 * @constructor
 */
Viewer.Scene.Setup = function (params) {

    this.context = params.context;

    this.axisHelper = null;

    this.WIDTH = this.context.container.clientWidth;
    this.HEIGHT = this.context.container.clientHeight;

    this.init();
};

/**
 *
 */
Viewer.Scene.Setup.prototype = {

    /**
     * Initialize all of the THREE.JS framework
     */
    init: function () {
        this.setupRenderer();
        this.lights();
        this.createGeometry();
        if(SETUP.SCENE.HELPERS){
            this.helpers();
        }
    },

    /**
     * Add scene helpers
     */
    helpers: function () {
        this.axisHelper = new THREE.AxisHelper(SETUP.SCENE.AXIS_LENGTH);
        this.axisHelper.position.setZ(5);
        this.axisHelper.name="axishelper";
        this.context.scene.add(this.axisHelper);
    },

    /**
     * Setup the render information.
     */
    setupRenderer: function () {
        this.context.renderer.setSize(this.WIDTH, this.HEIGHT);
        this.context.renderer.setViewport(0, 0, this.WIDTH, this.HEIGHT);
        this.context.jqContainer.fadeIn();
    },

    /**
     * Add light(s) to the scene
     */
    lights: function () {
        var dl1 = new THREE.DirectionalLight( 0xdddddd );
        dl1.position.set( 0, -1, 1 ).normalize();
        dl1.name="light";
        this.context.scene.add( dl1 );

        var spot1   = new THREE.SpotLight( 0xffffff, 1 );
        spot1.position.set( -300, 600, 300 );
        spot1.target.position.set( 0, 0, 0 );
        spot1.name = "light";
        this.context.scene.add( spot1 );

        var ambient = new THREE.AmbientLight( 0x444444 );
        ambient.name="ambient";
        this.context.scene.add( ambient );

        var dl2 = new THREE.DirectionalLight( 0xffeedd );
        dl2.position.set( 0, 0, 1 ).normalize();
        ambient.name="dl2";
        this.context.scene.add( dl2 );

    },

    /**
     * Add supporting geometry to the scene.
     */
    createGeometry: function () {
        if(SETUP.SCENE.GROUND) {
            this.createGround();
        }
        if(SETUP.SCENE.GRID) {
            this.createGrid();
        }
    },
    /**
     * Create a floor grid
     */
    createGrid: function () {
        var size = 100, step = 10;
        var geometry = new THREE.Geometry();
        var material = new THREE.LineBasicMaterial({color: 'black'});
        for(var i = -size; i <= size; i += step){
            geometry.vertices.push(new THREE.Vector3(-size, 0.04, i));
            geometry.vertices.push(new THREE.Vector3(size, 0.04, i));
            geometry.vertices.push(new THREE.Vector3(i, 0.04, -size));
            geometry.vertices.push(new THREE.Vector3(i, 0.04, size));
        }
        var line = new THREE.Line(geometry, material, THREE.LinePieces);
        line.name="grid";
        this.context.scene.add(line);
    },

    createGround: function () {
        var ground;
        var groundMaterial = new THREE.MeshPhongMaterial({
            color: 0xFFFFFF,
            ambient: 0x888888,
            shading: THREE.SmoothShading
        });

        ground = new THREE.Mesh( new THREE.PlaneGeometry(1024, 1024), groundMaterial);
        ground.rotation.x = -Math.PI / 2;
        ground.name="ground";
        this.context.scene.add(ground);
    }
};

