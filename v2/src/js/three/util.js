goog.provide('Viewer.Util');

/**
 * @namespace  General untility functions.
 */
Viewer.Util = {

    /**
     *  Create a random color
     */
    randomHex: function () {
        return ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
    },

    /**
    *   Change a group of meshes to random colors.
    *   @param {THREE.Mesh} mesh Cube mesh.
    */
    changeColor: function (mesh) {

        var rand = parseInt('0x' + this.randomHex(), 16);
        mesh.object.material.color.setHex(rand);

    },

    randomColor: function () {
        return parseInt('0x' + this.randomHex(), 16);
    },

    randomInt: function (max, min) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    supportsWebGL: function () {
        try {
            return !! window.WebGLRenderingContext && !! document.createElement( 'canvas' ).getContext( 'experimental-webgl' );
        } catch( e ) {
            return false;
        }
    }


};

