'use strict';

ThreeViewer.factory('ViewerFactory', ['$timeout', 'MessageBus', function ($timeout, MessageBus) {

    var home,
        intersected;

    /**
    * Initialize the 3D scene.
    * @param  {!{ canvasId: string, containerId: string }} params
     */
    function init(params) {
        home = new Viewer.Scene(params);
        // we delay a bit here to allow for the UI to load.
        $timeout(function () {
            MessageBus.trigger('appReady');
        }, SETUP.LOAD_DELAY);
        animate();
    }

    function animate () {
        requestAnimationFrame(animate);
        render();
    }

    /**
     * Renders the THREE.js scene graph.
     */
    function render() {
        home.renderer.render(home.scene, home.cameras.liveCam);
        home.controls.update();
    }

    ///////////////////////////////////////////////////////////////////
    ///
    ///  EXTERNAL API CALLS
    ///    Try and keep as much logic as possible within this call
    ///    Minimize additional functions in the scene classes.
    ///    If you need to do something complex, do it in a UTIL file and
    ///    call that function from within the following exposed methods
    ///
    ///////////////////////////////////////////////////////////////////

    /**
     * See if a mouse click intersects an object.
     * @param  {!{x:number, y:number}} mouse
     */
    function makeSelection(mouse) {

        var vector = new THREE.Vector3( mouse.x, mouse.y, 1).unproject(home.cameras.liveCam);
        home.raycaster.set(home.cameras.liveCam.position, vector.sub(home.cameras.liveCam.position).normalize());
        var intersected = home.raycaster.intersectObjects(home.wrangler.collision, true);
        console.info('intersected: ', intersected);
        if(intersected.length > 0){
            intersected = intersected[0];
            MessageBus.trigger('objectSelected', intersected[0])
        } else {
            intersected = null;
            console.info('No intersection detected');
        }
    }

    /**
     * Load OBJ and MTL file
     * @param {!{obj: string, mtl: string, name: string, type: string}} info
     */
    function loadOBJMTL(info){
        home.wrangler.loadOBJMTL(info.obj, info.mtl, info.name);
    }
    /**
     * Load OBJ file.
     * @param {!{obj: string, name: string, type: string}} info
     */
    function loadOBJ(info) {
        home.wrangler.loadOBJ(info.obj, info.name);
    }

    /**
     * Load a glTF file
     * @param {!{url: string, name: string, type: string}} info
     */
    function loadGLTF(info){
        home.wrangler.loadGLTF(info.url, info.name);
    }

    /**
     * Load a JavaScript model
     * @param {!{url: string, name: string, type: string}} info
     */
    function loadJSON (info){
        home.wrangler.loadJSON(info.url, info.name);
    }

    /**
     * Rotate the model
     * @param {!number} x
     * @param {!number} y
     * @param {!number} z
     */
    function rotate(x, y, z) {
            home.wrangler.currentModel.rotation.set(
                THREE.Math.degToRad(x),
                THREE.Math.degToRad(y),
                THREE.Math.degToRad(z)
            );
    }

    /**
     * Translate the model along an axis
     * @param {!number} x
     * @param {!number} y
     * @param {!number} z
     */
    function translate(x, y, z){
        home.wrangler.currentModel.position.set(x, y, z)
    }

    /**
     * @param {!number} s
     */
    function scale(s) {
        home.wrangler.currentModel.scale.set(s, s, s);
    }

    return {
        init: init,
        makeSelection: makeSelection,
        loadOBJMTL: loadOBJMTL,
        loadGLTF: loadGLTF,
        loadOBJ: loadOBJ,
        loadJSON: loadJSON,
        scale: scale,
        translate: translate,
        rotate: rotate
    };
}]);
