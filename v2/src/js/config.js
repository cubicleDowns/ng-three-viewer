'use strict';

var SETUP = {
    CAM: {
        ORTH_NEAR_PLANE: -1000,
        ORTH_FAR_PLANE: 1000,
        PERP_NEAR_PLANE: 1,
        PERP_FAR_PLANE: 10000,
        FOV: 70,
        ORTHO: false,
        VIEWSIZE: 1000
    },
    SCENE: {
        HELPERS: true,
        AXIS_LENGTH: 50,
        GRID: true,
        GROUND: true
    },
    LIGHTS: {
        DIRECTIONAL: true,
        SPOT: true,
        AMBIENT: true
    },
    DEBUG_MODE: false,
    SAMPLES: {
        GLTFURL : '/v2/dist/gltf/duck.json',
        GLTFNAME: 'glTF Duck',
        JSONURL: '/v1/dist/js/female.js',
        JSONNAME: 'Textured_Lady',
        OBJURL: '/v2/dist/obj/male02.obj',
        MTLURL: '/v2/dist/obj/male02.mtl',
        OBJNAME: 'No texture guy',
        OBJMTLNAME: 'Textured guy',
        GRIDTEXTURE: '/v2/dist/obj/UV_Grid_Sm.jpg'
    },
    'LOAD_DELAY': 1500
};
