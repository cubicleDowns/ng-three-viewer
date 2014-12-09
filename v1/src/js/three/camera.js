'use strict';

Viewer.Scene = Viewer.Scene || {};

/**
 * @namespace  Camera initialization.  Contains setup for both Perspective and Orthographic cameras.
 * @class Creates cameras for the scene.
 */
Viewer.Scene.Cameras = function (params) {

    this.context = params.context;

    this.liveCam = null;
    this.FOV = SETUP.CAM.FOV || 70;

    this.WIDTH = this.context.container.clientWidth;
    this.HEIGHT = this.context.container.clientHeight;

    // VIEWSIZE is the virtual distance across internally to the orthographic display.
    //   How many "3D world units" across the ration will represent.
    //   Setting this variable ensures you will have a regular distance across even if your windows resizes.
    this.VIEWSIZE = SETUP.CAM.VIEWSIZE || 1000;
    this.ASPECT_RATIO = this.WIDTH / this.HEIGHT;

    this.ORTHO_CAMERA = (SETUP.CAM.ORTHO) ? true : false;

    /** Perspective camera setup **/
    this.perpCam = null;
    this.PERP_NEAR_PLANE = SETUP.CAM.PERP_NEAR_PLANE || 1;
    this.PERP_FAR_PLANE = SETUP.CAM.PERP_FAR_PLANE || 10000;

    this.orthCam = null;
    this.ORTH_NEAR_PLANE = SETUP.CAM.ORTH_NEAR_PLANE || -1000;
    this.ORTH_FAR_PLANE = SETUP.CAM.ORTH_FAR_PLANE || 1000;

    this.controls = null;

    this.init();
};

Viewer.Scene.Cameras.prototype = {

  /**
   * Initialize a camera.
   */
  init: function () {
    if(this.ORTHO_CAMERA){
      this.initOrthographicCamera();
    } else {
      this.initPerspective();
    }
  },

    /**
     *  Inititalize the orthographic camera.
     */
    initOrthographicCamera: function () {
        this.orthoCam = new THREE.OrthographicCamera
                            (
                                -this.ASPECT_RATIO * this.VIEWSIZE/2,
                                this.ASPECT_RATIO * this.VIEWSIZE/2,
                                this.VIEWSIZE / 2,
                                this.VIEWSIZE / -2,
                                this.ORTH_NEAR_PLANE,
                                this.ORTH_FAR_PLANE
                            );

        this.orthoCam.name = 'ortho';

    this.liveCam = this.orthoCam;
    // console.log('init orth cam');
  },

    /**
     * Initialize the perspective camera.
     */
    initPerspective: function () {

        this.perpCam = new THREE.PerspectiveCamera
                        (
                            this.FOV,
                            this.ASPECT_RATIO,
                            this.PERP_NEAR_PLANE,
                            this.PERP_FAR_PLANE
                        );

        this.perpCam.position.y = 100;
        this.perpCam.position.z = 400;
        this.perpCam.lookAt( this.context.scene.position );

        this.perpCam.name = 'perp';

        this.liveCam = this.perpCam;
  }
};
