/* Originally found here: 
   https://github.com/crobi/ColladaAnimationCompress/blob/threejs-exports/closure/threejs-exports.js
*/
/**
 * @fileoverview
 * @externs
 *
 * A totally incomplete file containing three.js exports.
 * Use it with google's closure compiler.
 */
var THREE = {};

// ============================================================================
// THREE.Math (r59)
// ============================================================================

/** @type {number} */
THREE.Math.PI2;

/**
 * @return {string}
 */
THREE.Math.generateUUID = function() {};

/**
 * @param {number} x
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
THREE.Math.clamp = function ( x, a, b ) {};

/**
 * @param {number} x
 * @param {number} a
 * @return {number}
 */
THREE.Math.clampBottom = function ( x, a ) {};

/**
 * @param {number} x
 * @param {number} a1
 * @param {number} a2
 * @param {number} b1
 * @param {number} b2
 * @return {number}
 */
THREE.Math.mapLinear = function ( x, a1, a2, b1, b2 ) {};

/**
 * @param {number} x
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
THREE.Math.smoothstep = function ( x, min, max ) {};

/**
 * @param {number} x
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
THREE.Math.smootherstep = function ( x, min, max ) {};

/** @return {number} */
THREE.Math.random16 = function () {};

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
THREE.Math.randInt = function ( low, high ) {};

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
THREE.Math.randFloat = function ( low, high ) {};

/**
 * @param {number} range
 * @return {number}
 */
THREE.Math.randFloatSpread = function ( range ) {};

/**
 * @param {number} x
 * @return {number}
 */
THREE.Math.sign = function ( x ) {};

/**
 * @param {number} degrees
 * @return {number}
 */
THREE.Math.degToRad = function ( degrees ) {};

/**
 * @param {number} radians
 * @return {number}
 */
THREE.Math.radToDeg = function( radians ) {};

// ============================================================================
// THREE.Euler (r59)
// ============================================================================

/**
 *
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {string} order
 *
 * @constructor
 * @struct
 */
THREE.Euler = function ( x, y, z, order ) {};

/** @type {number} */ THREE.Euler.prototype._x;
/** @type {number} */ THREE.Euler.prototype._y;
/** @type {number} */ THREE.Euler.prototype._z;
/** @type {string} */ THREE.Euler.prototype._order;
/** @type {number} */ THREE.Euler.prototype.x;
/** @type {number} */ THREE.Euler.prototype.y;
/** @type {number} */ THREE.Euler.prototype.z;

// ============================================================================
// THREE.Matrix4 (r56)
// ============================================================================

/**
@constructor
@struct
@param {?number=} n11 
@param {?number=} n12
@param {?number=} n13
@param {?number=} n14
@param {?number=} n21
@param {?number=} n22
@param {?number=} n23
@param {?number=} n24
@param {?number=} n31
@param {?number=} n32
@param {?number=} n33
@param {?number=} n34
@param {?number=} n41
@param {?number=} n42
@param {?number=} n43
@param {?number=} n44
*/
THREE.Matrix4 = function(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44){};

/** @type {Array.<!number>} */ THREE.Matrix4.prototype.elements;

/**
@param {?number=} n11 
@param {?number=} n12
@param {?number=} n13
@param {?number=} n14
@param {?number=} n21
@param {?number=} n22
@param {?number=} n23
@param {?number=} n24
@param {?number=} n31
@param {?number=} n32
@param {?number=} n33
@param {?number=} n34
@param {?number=} n41
@param {?number=} n42
@param {?number=} n43
@param {?number=} n44
@return {THREE.Matrix4}
*/
THREE.Matrix4.prototype.set = function(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44){};

/**
@return {!THREE.Matrix4}
*/
THREE.Matrix4.prototype.identity = function(){};

/**
@param {THREE.Matrix4} m
@return {!THREE.Matrix4}
*/
THREE.Matrix4.prototype.copy = function(m){};

/**
@param {!THREE.Vector3} v
@param {?string=} order
@return {!THREE.Matrix4}
*/
THREE.Matrix4.prototype.setRotationFromEuler = function(v, order){};

/**
@param {!THREE.Quaternion} q
@return {!THREE.Matrix4}
*/
THREE.Matrix4.prototype.setRotationFromQuaternion = function(q){};

/**
@param {!THREE.Vector3} eye
@param {!THREE.Vector3} target
@param {!THREE.Vector3} up
@return {!THREE.Matrix4}
*/
THREE.Matrix4.prototype.lookAt = function(eye, target, up){};

/**
@param {!THREE.Matrix4} m
@return {!THREE.Matrix4}
*/
THREE.Matrix4.prototype.multiply = function(m){};

/**
@param {!THREE.Matrix4} m
@param {!THREE.Matrix4} n
@return {!THREE.Matrix4}
*/
THREE.Matrix4.prototype.multiplyMatrices = function(m, n){};

/**
@param {!THREE.Matrix4} m
@param {!THREE.Matrix4} n
@param {!Array.<number>} r
@return {!THREE.Matrix4}
*/
THREE.Matrix4.prototype.multiplyToArray = function(m, n, r){};

/**
@param {!number} s
@return {!THREE.Matrix4}
*/
THREE.Matrix4.prototype.multiplyScalar = function(s){};

/**
@param {!Array.<!number>} a
@return {!Array.<!number>}
*/
THREE.Matrix4.prototype.multiplyVector3Array = function(a){};

/**
@param {!THREE.Vector3} v
@return {!THREE.Vector3}
*/
THREE.Matrix4.prototype.rotateAxis = function(v){};

/**
@param {!THREE.Vector4} v
@return {!THREE.Vector4}
*/
THREE.Matrix4.prototype.crossVector = function(v){};

/**
@return {!number}
@nosideeffects
*/
THREE.Matrix4.prototype.determinant = function(v){};

/**
@return {!THREE.Matrix4}
*/
THREE.Matrix4.prototype.transpose = function(){};

/**
@param {!Array.<number>} a
@return {!Array.<!number>}
*/
THREE.Matrix4.prototype.flattenToArray = function(a){};

/**
@param {Array.<number>} a
@param {number} o
@return {Array.<number>}
*/
THREE.Matrix4.prototype.flattenToArrayOffset = function(a, o){};

/**
@param {!THREE.Vector3} p
@return {!THREE.Matrix4}
*/
THREE.Matrix4.prototype.setPosition = function(p){};

/**
@param {!THREE.Matrix4} m
@param {boolean=} throwOnInvertible
@return {!THREE.Matrix4}
*/
THREE.Matrix4.prototype.getInverse = function(m, throwOnInvertible){};

/**
@param {!THREE.Vector3} t
@param {!THREE.Quaternion} r
@param {!THREE.Vector3} s
@return {!THREE.Matrix4}
*/
THREE.Matrix4.prototype.compose = function(t, r, s){};

/**
@param {?THREE.Vector3=} t
@param {?THREE.Quaternion=} r
@param {?THREE.Vector3=} s
@return {!Array.<!THREE.Vector3|!THREE.Quaternion>}
*/
THREE.Matrix4.prototype.decompose = function(t, r, s){};

/**
@param {!THREE.Matrix4} m
@return {!THREE.Matrix4}
*/
THREE.Matrix4.prototype.extractPosition = function(m){};

/**
@param {!THREE.Matrix4} m
@return {!THREE.Matrix4}
*/
THREE.Matrix4.prototype.extractRotation = function(m){};

/**
@param {!THREE.Vector3} v
@return {!THREE.Matrix4}
*/
THREE.Matrix4.prototype.translate = function(v){};

/**
@param {!number} angle
@return {!THREE.Matrix4}
*/
THREE.Matrix4.prototype.rotateX = function(angle){};

/**
@param {!number} angle
@return {!THREE.Matrix4}
*/
THREE.Matrix4.prototype.rotateY = function(angle){};

/**
@param {!number} angle
@return {!THREE.Matrix4}
*/
THREE.Matrix4.prototype.rotateZ = function(angle){};

/**
@param {!THREE.Vector3} axis
@param {!number} angle
@return {!THREE.Matrix4}
*/
THREE.Matrix4.prototype.rotateByAxis = function(axis, angle){};

/**
@param {!THREE.Vector3} s
@return {!THREE.Matrix4}
*/
THREE.Matrix4.prototype.scale = function(s){};

/**
@nosideeffects
@return {!number}
*/
THREE.Matrix4.prototype.getMaxScaleOnAxis = function(){};

/**
@param {!number} x
@param {!number} y
@param {!number} z
@return {!THREE.Matrix4}
*/
THREE.Matrix4.prototype.makeTranslation = function(x,y,z){};

/**
@param {!number} theta
@return {!THREE.Matrix4}
*/
THREE.Matrix4.prototype.makeRotationX = function(theta){};

/**
@param {!number} theta
@return {!THREE.Matrix4}
*/
THREE.Matrix4.prototype.makeRotationY = function(theta){};

/**
@param {!number} theta
@return {!THREE.Matrix4}
*/
THREE.Matrix4.prototype.makeRotationZ = function(theta){};

/**
@param {!THREE.Vector3} axis
@param {!number} angle
@return {!THREE.Matrix4}
*/
THREE.Matrix4.prototype.makeRotationAxis = function(axis, angle){};

/**
@param {!number} x
@param {!number} y
@param {!number} z
@return {!THREE.Matrix4}
*/
THREE.Matrix4.prototype.makeScale = function(x,y,z){};

/**
@param {!number} left
@param {!number} right
@param {!number} bottom
@param {!number} top
@param {!number} near
@param {!number} far
@return {!THREE.Matrix4}
*/
THREE.Matrix4.prototype.makeFrustum = function(left, right, bottom, top, near, far){};

/**
@param {!number} fov
@param {!number} aspect
@param {!number} near
@param {!number} far
@return {!THREE.Matrix4}
*/
THREE.Matrix4.prototype.makePerspective = function(fov, aspect, near, far){};

/**
@param {!number} left
@param {!number} right
@param {!number} bottom
@param {!number} top
@param {!number} near
@param {!number} far
@return {!THREE.Matrix4}
*/
THREE.Matrix4.prototype.makeOrthographic = function(left, right, top, bottom, near, far){};

/**
@nosideeffects
@return {!THREE.Matrix4}
*/
THREE.Matrix4.prototype.clone = function(){};

// ============================================================================
// THREE.Matrix3
// ============================================================================

/**
@constructor
@struct
@param {?number=} n11 
@param {?number=} n12
@param {?number=} n13
@param {?number=} n21
@param {?number=} n22
@param {?number=} n23
@param {?number=} n31
@param {?number=} n32
@param {?number=} n33
*/
THREE.Matrix3 = function(n11, n12, n13, n21, n22, n23, n31, n32, n33){};

// ============================================================================
// THREE.Vector3 (r56)
// ============================================================================

/**
@constructor
@struct
@param {?number=} x
@param {?number=} y
@param {?number=} z
*/
THREE.Vector3 = function(x,y,z){};

/** @type {!number} */ THREE.Vector3.prototype.x;
/** @type {!number} */ THREE.Vector3.prototype.y;
/** @type {!number} */ THREE.Vector3.prototype.z;

/**
@param {number} x
@param {number} y
@param {number} z
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.set = function(x,y,z){};

/**
@param {number} x
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.setX = function(x){};

/**
@param {number} y
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.setY = function(y){};

/**
@param {number} z
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.setZ = function(z){};

/**
@param {number} index
@param {number} value
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.setComponent = function(index, value){};

/**
@nosideeffects
@param {number} index
@return {number}
*/
THREE.Vector3.prototype.getComponent = function(index){};

/**
@param {!THREE.Vector3 | !{x: number, y:number, z:number}} v
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.copy = function(v){};

/**
@param {!THREE.Vector3} v
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.add = function(v){};

/**
@param {number} s
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.addScalar = function(s){};

/**
@param {!THREE.Vector3} v
@param {!THREE.Vector3} w
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.addVectors = function(v, w){};

/**
@param {!THREE.Vector3} v
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.sub = function(v){};

/**
@param {!THREE.Vector3} v
@param {!THREE.Vector3} w
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.subVectors = function(v, w){};

/**
@param {!THREE.Vector3} v
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.multiply = function(v){};

/**
@param {number} s
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.multiplyScalar = function(s){};

/**
@param {!THREE.Vector3} v
@param {!THREE.Vector3} w
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.multiplyVectors = function(v, w){};

/**
@param {!THREE.Matrix3} m
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.applyMatrix3 = function(m){};

/**
@param {!THREE.Matrix4} m
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.applyMatrix4 = function(m){};

/**
@param {!THREE.Matrix4} m
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.applyProjection = function(m){};

/**
@param {!THREE.Quaternion} q
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.applyQuaternion = function(q){};

/**
@param {!THREE.Vector3} v
@param {?string=} order
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.applyEuler = function(v, order){};

/**
@param {!THREE.Vector3} axis
@param {number} angle
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.applyAxisAngle = function(axis, angle){};

/**
@param {!THREE.Matrix4} m
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.transformDirection = function(m){};

/**
@param {!THREE.Vector3} v
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.divide = function(v){};

/**
@param {number} s
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.divideScalar = function(s){};

/**
@param {!THREE.Vector3} v
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.min = function(v){};

/**
@param {!THREE.Vector3} v
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.max = function(v){};

/**
@param {!THREE.Vector3} min
@param {!THREE.Vector3} max
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.clamp = function(min, max){};

/**
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.negate = function(){};

/**
@nosideeffects
@param {!THREE.Vector3} v
@return {number}
*/
THREE.Vector3.prototype.dot = function(v){};

/**
@nosideeffects
@return {number}
*/
THREE.Vector3.prototype.lengthSq = function(){};

/**
@nosideeffects
@return {number}
*/
THREE.Vector3.prototype.length = function(){};

/**
@nosideeffects
@return {number}
*/
THREE.Vector3.prototype.lengthManhattan = function(){};

/**
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.normalize = function(){};

/**
@param {number} l
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.setLength = function(l){};

/**
@param {!THREE.Vector3} v
@param {number} alpha
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.lerp = function(v, alpha){};

/**
@param {!THREE.Vector3} v
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.cross = function(v){};

/**
@param {!THREE.Vector3} v
@param {!THREE.Vector3} w
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.crossVectors = function(v, w){};

/**
@param {!THREE.Vector3} v
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.projectOnVector = function(v){};

/**
@param {!THREE.Vector3} normal
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.projectOnPlane = function(normal){};

/**
@param {!THREE.Vector3} v
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.reflect = function(v){};

/**
@nosideeffects
@param {!THREE.Vector3} v
@return {number}
*/
THREE.Vector3.prototype.angleTo = function(v){};

/**
@nosideeffects
@param {!THREE.Vector3} v
@return {number}
*/
THREE.Vector3.prototype.distanceTo = function(v){};

/**
@nosideeffects
@param {!THREE.Vector3} v
@return {number}
*/
THREE.Vector3.prototype.distanceToSquared = function(v){};

/**
@param {!THREE.Matrix4} m
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.getPositionFromMatrix = function(m){};

/**
@param {!THREE.Matrix4} m
@param {?string=} order
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.setEulerFromRotationMatrix = function(m, order){};

/**
@param {!THREE.Quaternion} q
@param {?string=} order
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.setEulerFromQuaternion = function(q, order){};

/**
@param {!THREE.Matrix4} m
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.getScaleFromMatrix = function(m){};

/**
@nosideeffects
@param {!THREE.Vector3} v
@return {boolean}
*/
THREE.Vector3.prototype.equals = function(v){};

/**
@nosideeffects
@return {!Array.<number>}
*/
THREE.Vector3.prototype.toArray = function(){};

/**
@nosideeffects
@return {!THREE.Vector3}
*/
THREE.Vector3.prototype.clone = function(){};

// ============================================================================
// THREE.Vector2
// ============================================================================

/**
@constructor
@struct
@param {?number=} x
@param {?number=} y
*/
THREE.Vector2 = function(x,y){};

/** @type {!number} */ THREE.Vector2.prototype.x;
/** @type {!number} */ THREE.Vector2.prototype.y;

/**
@param {number} x
@param {number} y
@return {!THREE.Vector2}
*/
THREE.Vector2.prototype.set = function(x,y){};

/**
@param {!THREE.Vector2 | !{x:number, y:number}} v
@return {!THREE.Vector2}
*/
THREE.Vector2.prototype.copy = function(v){};

/**
 @param {(!THREE.Vector2 | !{x:number, y:number})} a
 @param {(!THREE.Vector2 | !{x:number, y:number})} b
 @return {!THREE.Vector2}
 */
THREE.Vector2.prototype.addVectors = function(a, b){};

/**
 @param {(!THREE.Vector2 | !{x:number, y:number})} v
 @return {!THREE.Vector2}
 */
THREE.Vector2.prototype.sub = function(v){};

/**
 @param {number} scalar
 @return {!THREE.Vector2}
 */
THREE.Vector2.prototype.divideScalar = function ( scalar ) {};

/**
@param {!THREE.Vector2} v
@param {number} alpha
@return {!THREE.Vector2}
 */
THREE.Vector2.prototype.lerp = function(v, alpha){}

/**
 * @return {number}
 */
THREE.Vector2.prototype.length = function () {};

/**
 * @param {!THREE.Vector2} v
 * @return {number}
 */
THREE.Vector2.prototype.distanceTo = function (v) {};

/**
@nosideeffects
@return {!THREE.Vector2}
*/
THREE.Vector2.prototype.clone = function(){};

/**
@nosideeffects
@return {!Array.<number>} [x, y]
*/
THREE.Vector2.prototype.toArray = function() {};

// ============================================================================
// THREE.Vector4
// ============================================================================

/**
@constructor
@struct
@param {?number=} x
@param {?number=} y
@param {?number=} z
@param {?number=} w
*/
THREE.Vector4 = function(x,y,z,w){};

/** @type {!number} */ THREE.Vector4.prototype.x;
/** @type {!number} */ THREE.Vector4.prototype.y;
/** @type {!number} */ THREE.Vector4.prototype.z;
/** @type {!number} */ THREE.Vector4.prototype.w;

/**
@param {number} x
@param {number} y
@param {number} z
@param {number} w
@return {THREE.Vector4}
*/
THREE.Vector4.prototype.set = function(x,y,z,w){};

/**
@param {THREE.Vector4 | {x: number, y:number, z:number, w:number}} v
@return {THREE.Vector4}
*/
THREE.Vector4.prototype.copy = function(v){};

/**
@nosideeffects
@return {THREE.Vector4}
*/
THREE.Vector4.prototype.clone = function(){};

// ============================================================================
// THREE.Quaternion (r56)
// ============================================================================

/**
@constructor
@struct
@param {?number=} x
@param {?number=} y
@param {?number=} z
@param {?number=} w
*/
THREE.Quaternion = function(x,y,z,w){};

/** @type {!number} */ THREE.Quaternion.prototype.x;
/** @type {!number} */ THREE.Quaternion.prototype.y;
/** @type {!number} */ THREE.Quaternion.prototype.z;
/** @type {!number} */ THREE.Quaternion.prototype.w;

/**
@param {number} x
@param {number} y
@param {number} z
@param {number} w
@return {THREE.Quaternion}
*/
THREE.Quaternion.prototype.set = function(x,y,z,w){};

/**
@param {THREE.Quaternion} q
@return {THREE.Quaternion}
*/
THREE.Quaternion.prototype.copy = function(q){};

/**
@param {THREE.Vector3} v
@param {?string=} order
@return {THREE.Quaternion}
*/
THREE.Quaternion.prototype.setFromEuler = function(v, order){};

/**
@param {THREE.Vector3} axis
@param {number} angle
@return {THREE.Quaternion}
*/
THREE.Quaternion.prototype.setFromAxisAngle = function(axis, angle){};

/**
@param {THREE.Matrix4} m
@return {THREE.Quaternion}
*/
THREE.Quaternion.prototype.setFromRotationMatrix = function(m){};

/**
@return {THREE.Quaternion}
*/
THREE.Quaternion.prototype.inverse = function(){};

/**
@return {THREE.Quaternion}
*/
THREE.Quaternion.prototype.conjugate = function(){};

/**
@nosideeffects
@return {number}
*/
THREE.Quaternion.prototype.lengthSq = function(){};

/**
@nosideeffects
@return {number}
*/
THREE.Quaternion.prototype.length = function(){};

/**
@return {THREE.Quaternion}
*/
THREE.Quaternion.prototype.normalize = function(){};

/**
@param {THREE.Quaternion} q
@return {THREE.Quaternion}
*/
THREE.Quaternion.prototype.multiply = function(q){};

/**
@param {THREE.Quaternion} q
@param {THREE.Quaternion} p
@return {THREE.Quaternion}
*/
THREE.Quaternion.prototype.multiplyQuaternions = function(q, p){};

/**
@param {THREE.Quaternion} q
@param {number} t
@return {THREE.Quaternion}
*/
THREE.Quaternion.prototype.slerp = function(q, t){};

/**
@nosideeffects
@param {THREE.Quaternion} q
@return {boolean}
*/
THREE.Quaternion.prototype.equals = function(q){};

/**
@nosideeffects
@return {THREE.Quaternion}
*/
THREE.Quaternion.prototype.clone = function(){};

// ============================================================================
// THREE.Color (r56, incomplete)
// ============================================================================

/**
@constructor
@struct
@param {?(THREE.Color|number|string)=} value
*/
THREE.Color = function(value){};

/** @type {!number} */ THREE.Color.prototype.r;
/** @type {!number} */ THREE.Color.prototype.g;
/** @type {!number} */ THREE.Color.prototype.b;

/**
@param {string|number|THREE.Color} v
@return {!THREE.Color}
*/
THREE.Color.prototype.set = function(v){};

/**
@param {number} h
@return {!THREE.Color}
*/
THREE.Color.prototype.setHex = function(h){};

/**
 * @return {string}
 */
THREE.Color.prototype.getHexString = function () {}

/**
@param {number} r
@param {number} g
@param {number} b
@return {!THREE.Color}
*/
THREE.Color.prototype.setRGB = function(r,g,b){};

/**
@param {number} h
@param {number} s
@param {number} l
@return {!THREE.Color}
*/
THREE.Color.prototype.setHSL = function(h,s,l){};

/**
 * @return {!{h:number, s:number, l:number}} temporary value, do not store.
 */
THREE.Color.prototype.getHSL = function () {};

/**
@param {string} style
@return {!THREE.Color}
*/
THREE.Color.prototype.setStyle = function(style){};

/**
@param {THREE.Color} c
@return {!THREE.Color}
*/
THREE.Color.prototype.copy = function(c){};

/**
@param {number} s
@return {!THREE.Color}
*/
THREE.Color.prototype.addScalar = function (s) {};

/**
@param {number} s
@return {!THREE.Color}
*/
THREE.Color.prototype.multiplyScalar = function (s) {};

// ============================================================================
// THREE.Face3 (r57)
// ============================================================================

/**
@constructor
@struct
@param {!number} v1
@param {!number} v2
@param {!number} v3
@param {?(THREE.Vector3|Array.<THREE.Vector3>)=} n
@param {?(THREE.Color|Array.<THREE.Color>)=} c
*/
THREE.Face3 = function(v1,v2,v3,n,c){};

/** @type {!number} */                   THREE.Face3.prototype.a;
/** @type {!number} */                   THREE.Face3.prototype.b;
/** @type {!number} */                   THREE.Face3.prototype.c;
/** @type {!THREE.Vector3} */            THREE.Face3.prototype.normal;
/** @type {!Array.<!THREE.Vector3>} */   THREE.Face3.prototype.vertexNormals;
/** @type {!THREE.Color} */              THREE.Face3.prototype.color;
/** @type {!Array.<!THREE.Color>} */     THREE.Face3.prototype.vertexColors;
/** @type {!Array.<!THREE.Vector3>} */   THREE.Face3.prototype.vertexTangents;
/** @type {!number} */                   THREE.Face3.prototype.materialIndex;


// ============================================================================
// THREE.Box2 (r59)
// ============================================================================

/**
 * @param {?THREE.Vector2=} min
 * @param {?THREE.Vector2=} max
 * @constructor
 */
THREE.Box2 = function (min, max) {};

/** @type {!THREE.Vector2} */            THREE.Box2.prototype.min;
/** @type {!THREE.Vector2} */            THREE.Box2.prototype.max;

THREE.Box2.prototype.set = function (min, max) {};
THREE.Box2.prototype.setFromPoints = function (points) {};
THREE.Box2.prototype.setFromCenterAndSize = function() {};
THREE.Box2.prototype.setFromObject = function() {};
THREE.Box2.prototype.copy = function (box) {};
THREE.Box2.prototype.makeEmpty = function () {};
THREE.Box2.prototype.empty = function () {};
THREE.Box2.prototype.center = function (optionalTarget) {};
THREE.Box2.prototype.size = function (optionalTarget) {};
THREE.Box2.prototype.expandByPoint = function (point) {};
THREE.Box2.prototype.expandByVector = function (vector) {};
THREE.Box2.prototype.expandByScalar = function (scalar) {};
THREE.Box2.prototype.containsPoint = function (point) {};
THREE.Box2.prototype.containsBox = function (box) {};
THREE.Box2.prototype.getParameter = function (point) {};
THREE.Box2.prototype.isIntersectionBox = function (box) {};
THREE.Box2.prototype.clampPoint = function (point, optionalTarget) {};
THREE.Box2.prototype.distanceToPoint = function() {};
THREE.Box2.prototype.getBoundingSphere = function() {};
THREE.Box2.prototype.intersect = function (box) {};
THREE.Box2.prototype.union = function (box) {};
THREE.Box2.prototype.translate = function (offset) {};
THREE.Box2.prototype.equals = function (box) {};

/** @return {!THREE.Box2} */
THREE.Box2.prototype.clone = function () {};

// ============================================================================
// THREE.Box3 (r59)
// ============================================================================

/**
 * @param {?THREE.Vector3=} min
 * @param {?THREE.Vector3=} max
 * @constructor
 */
THREE.Box3 = function (min, max) {};

/** @type {!THREE.Vector3} */            THREE.Box3.prototype.min;
/** @type {!THREE.Vector3} */            THREE.Box3.prototype.max;

THREE.Box3.prototype.set = function (min, max) {};
THREE.Box3.prototype.setFromPoints = function (points) {};
THREE.Box3.prototype.setFromCenterAndSize = function() {};
THREE.Box3.prototype.setFromObject = function() {};
THREE.Box3.prototype.copy = function (box) {};
THREE.Box3.prototype.makeEmpty = function () {};
THREE.Box3.prototype.empty = function () {};
THREE.Box3.prototype.center = function (optionalTarget) {};
THREE.Box3.prototype.size = function (optionalTarget) {};
THREE.Box3.prototype.expandByPoint = function (point) {};
THREE.Box3.prototype.expandByVector = function (vector) {};
THREE.Box3.prototype.expandByScalar = function (scalar) {};
THREE.Box3.prototype.containsPoint = function (point) {};
THREE.Box3.prototype.containsBox = function (box) {};
THREE.Box3.prototype.getParameter = function (point) {};
THREE.Box3.prototype.isIntersectionBox = function (box) {};
THREE.Box3.prototype.clampPoint = function (point, optionalTarget) {};
THREE.Box3.prototype.distanceToPoint = function() {};
THREE.Box3.prototype.getBoundingSphere = function() {};
THREE.Box3.prototype.intersect = function (box) {};
THREE.Box3.prototype.union = function (box) {};
THREE.Box3.prototype.applyMatrix4 = function() {};
THREE.Box3.prototype.translate = function (offset) {};
THREE.Box3.prototype.equals = function (box) {};

/** @return {!THREE.Box3} */
THREE.Box3.prototype.clone = function () {};

// ============================================================================
// THREE.Plane (r59)
// ============================================================================

/**
 * @param {THREE.Vector3=} normal
 * @param {number=} constant
 * @constructor
 */
THREE.Plane = function (normal, constant) {};

/** @type {!THREE.Vector3} */            THREE.Plane.prototype.min;
/** @type {!THREE.Vector3} */            THREE.Plane.prototype.max;

THREE.Plane.prototype.set = function (normal, constant) {};
THREE.Plane.prototype.setComponents = function (x, y, z, w) {};
THREE.Plane.prototype.setFromNormalAndCoplanarPoint = function (normal, point) {};
THREE.Plane.prototype.setFromCoplanarPoints = function() {};
THREE.Plane.prototype.copy = function (plane) {};
THREE.Plane.prototype.normalize = function () {};
THREE.Plane.prototype.negate = function () {};
THREE.Plane.prototype.distanceToPoint = function (point) {};
THREE.Plane.prototype.distanceToSphere = function (sphere) {};
THREE.Plane.prototype.projectPoint = function (point, optionalTarget) {};
THREE.Plane.prototype.orthoPoint = function (point, optionalTarget) {};
THREE.Plane.prototype.isIntersectionLine = function (line) {};
THREE.Plane.prototype.intersectLine = function() {};
THREE.Plane.prototype.coplanarPoint = function (optionalTarget) {};
THREE.Plane.prototype.applyMatrix4 = function() {};
THREE.Plane.prototype.translate = function (offset) {};
THREE.Plane.prototype.equals = function (plane) {};

/** @return {!THREE.Plane} */
THREE.Plane.prototype.clone = function () {};

// ============================================================================
// THREE.Sphere (r59)
// ============================================================================

/**
 * @param {THREE.Vector3=} center
 * @param {number=} radius
 * @constructor
 */
THREE.Sphere = function (center, radius) {};

/** @type {!THREE.Vector3} */            THREE.Sphere.prototype.center;
/** @type {number} */                    THREE.Sphere.prototype.radius;

THREE.Sphere.prototype.set = function (center, radius) {};
THREE.Sphere.prototype.setFromPoints = function (points) {};
THREE.Sphere.prototype.copy = function (sphere) {};
THREE.Sphere.prototype.empty = function () {};
THREE.Sphere.prototype.containsPoint = function (point) {};
THREE.Sphere.prototype.distanceToPoint = function (point) {};
THREE.Sphere.prototype.intersectsSphere = function (sphere) {};
THREE.Sphere.prototype.clampPoint = function (point, optionalTarget) {};
THREE.Sphere.prototype.getBoundingBox = function (optionalTarget) {};
THREE.Sphere.prototype.applyMatrix4 = function() {};
THREE.Sphere.prototype.translate = function (offset) {};
THREE.Sphere.prototype.equals = function (sphere) {};

/** @return {!THREE.Sphere} */
THREE.Sphere.prototype.clone = function () {};

// ============================================================================
// THREE.Object3D (r56, incomplete)
// ============================================================================

/**
@constructor
@struct
*/
THREE.Object3D = function(){};

/** @type {!string} */                   THREE.Object3D.prototype.name;
/** @type {!Object} */                   THREE.Object3D.prototype.properties;
/** @type {?THREE.Object3D} */           THREE.Object3D.prototype.parent;
/** @type {!Array.<!THREE.Object3D>} */  THREE.Object3D.prototype.children;
/** @type {!THREE.Vector3} */            THREE.Object3D.prototype.up;
/** @type {!THREE.Vector3} */            THREE.Object3D.prototype.position;
/** @type {!THREE.Euler} */              THREE.Object3D.prototype.rotation;
/** @type {!string} */                   THREE.Object3D.prototype.eulerOrder;
/** @type {!THREE.Vector3} */            THREE.Object3D.prototype.scale;
/** @type {?number} */                   THREE.Object3D.prototype.renderDepth;
/** @type {!boolean} */                  THREE.Object3D.prototype.rotationAutoUpdate;
/** @type {!THREE.Matrix4} */            THREE.Object3D.prototype.matrix;
/** @type {!THREE.Matrix4} */            THREE.Object3D.prototype.matrixWorld;
/** @type {!THREE.Matrix4} */            THREE.Object3D.prototype.matrixRotationWorld;
/** @type {!boolean} */                  THREE.Object3D.prototype.matrixAutoUpdate;
/** @type {!boolean} */                  THREE.Object3D.prototype.matrixWorldNeedsUpdate;
/** @type {!THREE.Quaternion} */         THREE.Object3D.prototype.quaternion;
/** @type {!boolean} */                  THREE.Object3D.prototype.useQuaternion;
/** @type {!boolean} */                  THREE.Object3D.prototype.visible;
/** @type {!boolean} */                  THREE.Object3D.prototype.castShadow;
/** @type {!boolean} */                  THREE.Object3D.prototype.receiveShadow;
/** @type {!boolean} */                  THREE.Object3D.prototype.frustumCulled;
/** @type {!Object.<*,*>} */             THREE.Object3D.prototype.userData;

/**
@param {THREE.Matrix4} m
*/
THREE.Object3D.prototype.applyMatrix = function(m){};

/**
@param {THREE.Object3D} o
*/
THREE.Object3D.prototype.add = function(o){};

/**
@param {THREE.Object3D} o
*/
THREE.Object3D.prototype.remove = function(o){};

/**
Note: this function has side effects
@return {THREE.Object3D}
*/
THREE.Object3D.prototype.clone = function(){};

/**
@return {function(!number): THREE.Object3D}
*/
THREE.Object3D.prototype.translateX = function(){};

/**
@return {function(!number): THREE.Object3D}
*/
THREE.Object3D.prototype.translateY = function(){};

/**
@return {function(!number): THREE.Object3D}
*/
THREE.Object3D.prototype.translateZ = function(){};

THREE.Object3D.prototype.updateMatrix = function(){};

/**
@param {?boolean=} force
*/
THREE.Object3D.prototype.updateMatrixWorld = function(force){};

// ============================================================================
// THREE.Mesh
// ============================================================================

/**
@constructor
@extends THREE.Object3D
@param {THREE.Geometry} geometry
@param {THREE.Material|THREE.MeshFaceMaterial} material
*/
THREE.Mesh = function(geometry, material){};

/** @type {!THREE.Geometry} */   THREE.Mesh.prototype.geometry;
/** @type {!THREE.Material} */   THREE.Mesh.prototype.material;

THREE.Mesh.prototype.updateMorphTargets = function () {};

/**
 * @param {string} name
 * @return {number}
 */
THREE.Mesh.prototype.getMorphTargetIndexByName = function ( name ) {};

/**
 * @param {THREE.Mesh=} object
 * @return {!THREE.Mesh}
 */
THREE.Mesh.prototype.clone = function ( object ) {};
// ============================================================================
// THREE.MorphAnimMesh
// ============================================================================

/**
@constructor
@extends THREE.Mesh
@param {THREE.Geometry} g
@param {THREE.Material|THREE.MeshFaceMaterial} m
*/
THREE.MorphAnimMesh = function(g,m){};

// ============================================================================
// THREE.SkinnedMesh
// ============================================================================

/**
@constructor
@extends THREE.Mesh
@param {THREE.Geometry} g
@param {THREE.Material|THREE.MeshFaceMaterial} m
*/
THREE.SkinnedMesh = function(g,m){};

/** @type {?Array.<!THREE.Matrix4>} */ THREE.SkinnedMesh.prototype.boneInverses;

// ============================================================================
// THREE.Geometry
// ============================================================================

/**
@constructor
@struct
*/
THREE.Geometry = function(){};

/** @type {string} */                           THREE.Geometry.prototype.name;
/** @type {Array.<!THREE.Vector3>} */           THREE.Geometry.prototype.vertices;
/** @type {Array.<!THREE.Color>} */             THREE.Geometry.prototype.colors;
/** @type {Array.<!THREE.Vector3>} */           THREE.Geometry.prototype.normals;
/** @type {Array.<!THREE.Face3>} */             THREE.Geometry.prototype.faces;
/** @type {Array.<Array.<!THREE.Vector2>>} */   THREE.Geometry.prototype.faceUvs;
/** @type {Array.<Array.<!THREE.Vector2>>} */   THREE.Geometry.prototype.faceVertexUvs;
/** @type {Array.<Object>} */                   THREE.Geometry.prototype.morphTargets;
/** @type {Array.<Object>} */                   THREE.Geometry.prototype.morphColors;
/** @type {Array.<Object>} */                   THREE.Geometry.prototype.morphNormals;
/** @type {Array.<!THREE.Vector4>} */           THREE.Geometry.prototype.skinWeights;
/** @type {Array.<!THREE.Vector4>} */           THREE.Geometry.prototype.skinIndices;
/** @type {Array.<number>} */                   THREE.Geometry.prototype.lineDistances;
/** @type {?THREE.Box3} */                      THREE.Geometry.prototype.boundingBox;
/** @type {?THREE.Sphere} */                    THREE.Geometry.prototype.boundingSphere;
/** @type {boolean} */                          THREE.Geometry.prototype.hasTangents;
/** @type {boolean} */                          THREE.Geometry.prototype.dynamic;
/** @type {boolean} */                          THREE.Geometry.prototype.verticesNeedUpdate;
/** @type {boolean} */                          THREE.Geometry.prototype.elementsNeedUpdate;
/** @type {boolean} */                          THREE.Geometry.prototype.uvsNeedUpdate;
/** @type {boolean} */                          THREE.Geometry.prototype.normalsNeedUpdate;
/** @type {boolean} */                          THREE.Geometry.prototype.tangentsNeedUpdate;
/** @type {boolean} */                          THREE.Geometry.prototype.colorsNeedUpdate;
/** @type {boolean} */                          THREE.Geometry.prototype.lineDistancesNeedUpdate;
/** @type {boolean} */                          THREE.Geometry.prototype.buffersNeedUpdate;

/**
@param {THREE.Matrix4} m
*/
THREE.Geometry.prototype.applyMatrix = function(m){};

/** */
THREE.Geometry.prototype.computeCentroids = function(){};

/** */
THREE.Geometry.prototype.computeFaceNormals = function(){};

/**
@param {boolean} areaWeighted
*/
THREE.Geometry.prototype.computeVertexNormals = function(areaWeighted){};

/** */
THREE.Geometry.prototype.computeMorphNormals = function(){};

/** */
THREE.Geometry.prototype.computeTangents = function(){};

/** */
THREE.Geometry.prototype.computeLineDistances = function(){};

/** */
THREE.Geometry.prototype.computeBoundingBox = function(){};

/** */
THREE.Geometry.prototype.computeBoundingSphere = function(){};

/** */
THREE.Geometry.prototype.mergeVertices = function(){};

/**
@return {THREE.Geometry}
*/
THREE.Geometry.prototype.clone = function(){};

/** */
THREE.Geometry.prototype.dispose = function(){};

//============================================================================
//THREE.TubeGeometry
//============================================================================

/**
 * @param {!THREE.Curve} path
 * @param {number} segments
 * @param {number} radius
 * @param {number} radialSegments
 * @param {boolean} closed
 * @constructor
 * @struct
 * @extends THREE.Geometry
 */
THREE.TubeGeometry = function(path, segments, radius, radialSegments, closed) {};

/** @type {!THREE.Curve} */                         THREE.TubeGeometry.prototype.path;
/** @type {number} */                               THREE.TubeGeometry.prototype.segments;
/** @type {number} */                               THREE.TubeGeometry.prototype.radius;
/** @type {number} */                               THREE.TubeGeometry.prototype.radialSegments;
/** @type {boolean} */                              THREE.TubeGeometry.prototype.closed;

/** @type {!Array.<!Array.<!THREE.Vector3>>} */     THREE.TubeGeometry.prototype.grid = [];

// proxy internals
/** @type {!Array.<!THREE.Vector3>} */              THREE.TubeGeometry.prototype.tangents;
/** @type {!Array.<!THREE.Vector3>} */              THREE.TubeGeometry.prototype.normals;
/** @type {!Array.<!THREE.Vector3>} */              THREE.TubeGeometry.prototype.binormals;

// ============================================================================
// THREE.Geometry skinning extensions
// ============================================================================

// Skinning animation extensions
/** @typedef {{parent:number, pos:Array.<number>, rotq:Array.<number>, scl:Array.<number>}} */
var THREEGeometryBone;
/** @typedef {{time:number, pos:Array.<number>, rot:Array.<number>, scl:Array.<number>}} */
var THREEGeometryAnimationKey;
/** @typedef {{parent:number, keys:Array.<THREEGeometryAnimationKey>}} */
var THREEGeometryAnimationChannel;
/** @typedef {{name:string, fps:number, length: number, hierarchy:Array.<THREEGeometryAnimationChannel>}} */
var THREEGeometryAnimation;

/** @type {Array.<THREEGeometryBone>}*/         THREE.Geometry.prototype.bones;
/** @type {THREEGeometryAnimation} */           THREE.Geometry.prototype.animation;

// ============================================================================
// THREE.Texture
// ============================================================================

/**
@constructor
@param {*} img
*/
THREE.Texture = function(img){};

/** @type {boolean} */
THREE.Texture.prototype.flipY;

// ============================================================================
// THREE.Material
// ============================================================================

/**
@constructor
*/
THREE.Material = function(){};

/** @type {!number} */        THREE.Material.prototype.id;
/** @type {!string} */        THREE.Material.prototype.name;

/** @type {!number} */        THREE.Material.prototype.opacity;
/** @type {!boolean} */       THREE.Material.prototype.visible;
/** @type {!boolean} */       THREE.Material.prototype.transparent;
/** @type {!number} */        THREE.Material.prototype.alphaTest;
/** @type {!boolean} */       THREE.Material.prototype.depthTest;
/** @type {!boolean} */       THREE.Material.prototype.depthWrite;
/** @type {!boolean} */       THREE.Material.prototype.polygonOffset;
/** @type {!number} */        THREE.Material.prototype.polygonOffsetFactor;
/** @type {!number} */        THREE.Material.prototype.polygonOffsetUnits;
/** @type {*} */              THREE.Material.prototype.side;
/** @type {*} */              THREE.Material.prototype.blending;
/** @type {*} */              THREE.Material.prototype.blendSrc;
/** @type {*} */              THREE.Material.prototype.blendDst;
/** @type {*} */              THREE.Material.prototype.blendEquation;

// The following properties are not defined on THREE.Material,
// but on virtually all classes extending THREE.Material
/** @type {!boolean} */       THREE.Material.prototype.skinning;
/** @type {!boolean} */       THREE.Material.prototype.morphTargets;
/** @type {!boolean} */       THREE.Material.prototype.morphNormals;

/**
 * @param {?THREE.Material=} object
 * @return {!THREE.Material}
 */
THREE.Material.prototype.clone = function (object) {};

THREE.Material.prototype.setValues = function (values) {};

THREE.Material.prototype.refreshUniforms = function (camera, lights, gammaInput, canvasHeight) {};

// ============================================================================
// THREE.MeshFaceMaterial
// ============================================================================

/**
@constructor
@param {Array.<THREE.Material>} materials
*/
THREE.MeshFaceMaterial = function(materials){};

/** @type {Array.<THREE.Material>} */
THREE.MeshFaceMaterial.prototype.materials;

// ============================================================================
// THREE.ShaderMaterial
// ============================================================================

/**
@constructor
@extends {THREE.Material}
@param {*=} p
*/
THREE.ShaderMaterial = function(p){};

// ============================================================================
// THREE.MeshBasicMaterial
// ============================================================================

/**
@constructor
@extends {THREE.Material}
@param {*=} p
*/
THREE.MeshBasicMaterial = function(p){};

// ============================================================================
// THREE.MeshPhongMaterial
// ============================================================================

/**
@constructor
@extends THREE.Material
@param {*=} p
*/
THREE.MeshPhongMaterial = function(p){};

/** @type {!THREE.Color} */   THREE.MeshPhongMaterial.prototype.color;
/** @type {!THREE.Color} */   THREE.MeshPhongMaterial.prototype.ambient;
/** @type {!THREE.Color} */   THREE.MeshPhongMaterial.prototype.emissive;
/** @type {!THREE.Color} */   THREE.MeshPhongMaterial.prototype.specular;
/** @type {!number} */        THREE.MeshPhongMaterial.prototype.shininess;
/** @type {?THREE.Texture} */ THREE.MeshPhongMaterial.prototype.map;
/** @type {?THREE.Texture} */ THREE.MeshPhongMaterial.prototype.specularMap;
/** @type {?THREE.Texture} */ THREE.MeshPhongMaterial.prototype.lightMap;
/** @type {?THREE.Texture} */ THREE.MeshPhongMaterial.prototype.bumpMap;
/** @type {?THREE.Texture} */ THREE.MeshPhongMaterial.prototype.normalMap;
/** @type {?THREE.Texture} */ THREE.MeshPhongMaterial.prototype.envMap;

// ============================================================================
// THREE.MeshLambertMaterial
// ============================================================================

/**
@constructor
@extends {THREE.Material}
@param {*=} p
*/
THREE.MeshLambertMaterial = function(p){};

//============================================================================
//THREE.LineBasicMaterial
//============================================================================

/**
@constructor
@extends {THREE.Material}
@param {*=} p
*/
THREE.LineBasicMaterial = function(p){};

// ============================================================================
// THREE.Light
// ============================================================================

/**
@constructor
@extends {THREE.Object3D}
@param {number} hex
*/
THREE.Light = function(hex){};

// ============================================================================
// THREE.AmbientLight
// ============================================================================

/**
@constructor
@extends {THREE.Light}
@param {number} hex
*/
THREE.AmbientLight = function(hex){};

// ============================================================================
// THREE.DirectionalLight
// ============================================================================

/**
@constructor
@extends {THREE.Light}
@param {number} hex
@param {?number=} intensity
*/
THREE.DirectionalLight = function(hex, intensity){};

// ============================================================================
// THREE.PointLight
// ============================================================================

/**
@constructor
@extends {THREE.Light}
@param {number} hex
@param {?number=} intensity
@param {?number=} distance
*/
THREE.PointLight = function(hex, intensity, distance){};

// ============================================================================
// THREE.SpotLight
// ============================================================================

/**
@constructor
@extends {THREE.Light}
@param {number} hex
@param {?number=} intensity
@param {?number=} distance
@param {?number=} angle
@param {?number=} exponent
*/
THREE.SpotLight = function(hex, intensity, distance, angle, exponent){};

// ============================================================================
// THREE.Line (r59)
// ============================================================================

/**
 * @param {THREE.Geometry=} geometry
 * @param {THREE.Material=} material
 * @param {number=} type
 * @struct
 * @constructor
 * @extends THREE.Object3D
 */
THREE.Line = function (geometry, material, type) {};

/** @type {!THREE.Geometry} */          THREE.Line.prototype.geometry;
/** @type {!THREE.Material} */          THREE.Line.prototype.material;
/** @type {number} */                   THREE.Line.prototype.type;

/**
 * @param {?THREE.Line=} object
 * @return {!THREE.Line}
 */
THREE.Line.prototype.clone = function (object) {};

/** @type {number} */ THREE.LineStrip;
/** @type {number} */ THREE.LinePieces;
/** @type {number} */ THREE.LineLoop;

// ============================================================================
// THREE.Curve (r59)
// ============================================================================

/**
 * @constructor
 * @struct
 */
THREE.Curve = function () {};

/**
 * @param {number} t
 * @return {!THREE.Vector3}
 */
THREE.Curve.prototype.getPoint = function ( t ) {};

// ============================================================================
// THREE.LineCurve (r59)
// ============================================================================

/**
 * @param {!THREE.Vector3} v1
 * @param {!THREE.Vector3} v2
 * @constructor
 * @struct
 * @extends THREE.Curve
 */
THREE.LineCurve = function ( v1, v2 ) {};

/** @type {!THREE.Vector3} */   THREE.LineCurve.prototype.v1;
/** @type {!THREE.Vector3} */   THREE.LineCurve.prototype.v2;

/**
 * @param {number} t
 * @return {!THREE.Vector3}
 */
THREE.LineCurve.prototype.getPoint = function ( t ) {};

/**
 * @param {number} u
 * @return {!THREE.Vector3}
 */
THREE.LineCurve.prototype.getPointAt = function ( u ) {};

/**
 * @param {number} t
 * @return {!THREE.Vector3}
 */
THREE.LineCurve.prototype.getTangent = function( t ) {};

// ============================================================================
// THREE.Camera
// ============================================================================

/**
@constructor
@struct
@extends {THREE.Object3D}
*/
THREE.Camera = function(){};

/** @type {!THREE.Matrix4} */           THREE.Camera.prototype.matrixWorldInverse;
/** @type {!THREE.Matrix4} */           THREE.Camera.prototype.projectionMatrix;
/** @type {!THREE.Matrix4} */           THREE.Camera.prototype.projectionMatrixInverse;
/** @type {!boolean} */                 THREE.Camera.prototype.isOrtho;

THREE.Camera.prototype.lookAt = function () {};

// ============================================================================
// THREE.OrthographicCamera
// ============================================================================

/**
@constructor
@extends {THREE.Camera}
@param {?number=} left
@param {?number=} right
@param {?number=} top
@param {?number=} bottom
@param {?number=} near
@param {?number=} far
*/
THREE.OrthographicCamera = function(left, right, top, bottom, near, far){};

/** @type {number} */                  THREE.OrthographicCamera.prototype.left;
/** @type {number} */                  THREE.OrthographicCamera.prototype.right;
/** @type {number} */                  THREE.OrthographicCamera.prototype.top;
/** @type {number} */                  THREE.OrthographicCamera.prototype.bottom;
/** @type {number} */                  THREE.OrthographicCamera.prototype.near;
/** @type {number} */                  THREE.OrthographicCamera.prototype.far;

THREE.OrthographicCamera.prototype.updateProjectionMatrix = function () {}

// ============================================================================
// THREE.PerspectiveCamera
// ============================================================================

/**
@constructor
@extends {THREE.Camera}
@param {?number=} fov
@param {?number=} aspect
@param {?number=} near
@param {?number=} far
*/
THREE.PerspectiveCamera = function(fov, aspect, near, far){};

/** @type {number} */       THREE.PerspectiveCamera.prototype.fov;
/** @type {number} */       THREE.PerspectiveCamera.prototype.aspect;
/** @type {number} */       THREE.PerspectiveCamera.prototype.near;
/** @type {number} */       THREE.PerspectiveCamera.prototype.far;

// ============================================================================
// THREE.Frustum (r59)
// ============================================================================

/**
 * @param {?THREE.Plane=} p0
 * @param {?THREE.Plane=} p1
 * @param {?THREE.Plane=} p2
 * @param {?THREE.Plane=} p3
 * @param {?THREE.Plane=} p4
 * @param {?THREE.Plane=} p5
 * @constructor
 */
THREE.Frustum = function (p0, p1, p2, p3, p4, p5) {};

/** @type {Array.<!THREE.Plane>} */     THREE.Frustum.prototype.planes;


/**
 * @param {!THREE.Plane} p0
 * @param {!THREE.Plane} p1
 * @param {!THREE.Plane} p2
 * @param {!THREE.Plane} p3
 * @param {!THREE.Plane} p4
 * @param {!THREE.Plane} p5
 * @return {!THREE.Frustum}
 */
THREE.Frustum.prototype.set = function (p0, p1, p2, p3, p4, p5) {};

/**
 * @param {!THREE.Frustum} frustum
 * @return {!THREE.Frustum}
 */
THREE.Frustum.prototype.copy = function (frustum) {};

/**
 * @param {!THREE.Matrix4} m
 * @return {!THREE.Frustum}
 */
THREE.Frustum.prototype.setFromMatrix = function (m) {};

/**
 * @param {!THREE.Object3D} object
 * @return {boolean}
 */
THREE.Frustum.prototype.intersectsObject = function (object) {};

/**
 * @param {!THREE.Sphere} sphere
 * @return {boolean}
 */
THREE.Frustum.prototype.intersectsSphere = function (sphere) {};

/**
 * @param {(!THREE.Box3|{min: !THREE.Vector3, max: !THREE.Vector3})} box
 * @return {boolean}
 */
THREE.Frustum.prototype.intersectsBox  = function(box) {};

/**
 * @param {!THREE.Vector3} point
 * @return {boolean}
 */
THREE.Frustum.prototype.containsPoint = function (point) {};

/** @return {!THREE.Frustum} */
THREE.Frustum.prototype.clone = function () {};

//============================================================================
//THREE.Projector
//============================================================================

/**
@constructor
*/
THREE.Projector = function(){};

/**
 * @param {!THREE.Vector3} vector
 * @param {!THREE.Camera} camera
 * @return {THREE.Vector3}
 */
THREE.Projector.prototype.projectVector = function (vector, camera) {};

/**
 * @param {!THREE.Vector3} vector
 * @param {!THREE.Camera} camera
 * @return {THREE.Vector3}
 */
THREE.Projector.prototype.unprojectVector = function (vector, camera) {};

/**
 * @param {!THREE.Vector3} vector
 * @param {!THREE.Camera} camera
 * @return {THREE.Raycaster}
 */
THREE.Projector.prototype.pickingRay = function (vector, camera) {};

//============================================================================
//THREE.Raycaster
//============================================================================

/**
 * @param {!THREE.Vector3} origin
 * @param {!THREE.Vector3} direction
 * @param {!THREE.Plane} near
 * @param {!THREE.Plane} far
 * @constructor
 */
THREE.Raycaster = function(origin, direction, near, far){};

/** @type {!THREE.Ray} */           THREE.Raycaster.prototype.ray;

/**
 * @param {!THREE.Vector3} origin
 * @param {!THREE.Vector3} direction
 */
THREE.Raycaster.prototype.set = function ( origin, direction ) {};

/**
 * @param {!THREE.Object3D} object
 * @param {boolean=} recursive
 */
THREE.Raycaster.prototype.intersectObject = function ( object, recursive ) {};

/**
 * @param {!Array.<!THREE.Object3D>} objects
 * @param {boolean=} recursive
 */
THREE.Raycaster.prototype.intersectObjects = function ( objects, recursive ) {};

//============================================================================
//THREE.Ray
//============================================================================

/**
* @param {?THREE.Vector3=} origin
* @param {?THREE.Vector3=} direction
* @constructor
*/
THREE.Ray = function(origin, direction){};

/**
 * @param {!THREE.Plane} plane
 * @param {!THREE.Vector3=} optionalTarget
 * @return {!THREE.Vector3}
 */
THREE.Ray.prototype.intersectPlane = function ( plane, optionalTarget ) {};

// ============================================================================
// THREE.Scene (r57, incomplete)
// ============================================================================

/**
@constructor
@struct
@extends {THREE.Object3D}
*/
THREE.Scene = function(){};

/** @type {*} */                         THREE.Scene.prototype.fog;
/** @type {*} */                         THREE.Scene.prototype.overrideMaterial;
/** @type {boolean} */                   THREE.Scene.prototype.matrixAutoUpdate;
/** @type {boolean} */                   THREE.Scene.prototype.autoUpdate;

// ============================================================================
// THREE.ParticleSystem (r59)
// ============================================================================

/**
 *
 * @param {THREE.Geometry=} geometry
 * @param {THREE.Material=} material
 * @constructor
 * @extends THREE.Object3D
 */
THREE.ParticleSystem = function (geometry, material) {};

/** @type {!THREE.Geometry} */          THREE.ParticleSystem.prototype.geometry;
/** @type {!THREE.Material} */          THREE.ParticleSystem.prototype.material;

/** @type {boolean} */                  THREE.ParticleSystem.prototype.sortParticles;
/** @type {boolean} */                  THREE.ParticleSystem.prototype.frustumCulled;

/**
 * @param {?THREE.ParticleSystem=} object
 * @return {!THREE.ParticleSystem}
 */
THREE.ParticleSystem.prototype.clone = function (object) {};

// ============================================================================
// THREE.CSS3DObject (r59)
// ============================================================================

/**
 * @param {Element} element
 * @constructor
 * @extends THREE.Object3D
 */
THREE.CSS3DObject = function (element) {};

/** @type {boolean} */                  THREE.CSS3DObject.prototype.needsUpdate;
/**
 * @private
 * @type {string}
 */
THREE.CSS3DObject.prototype._styleString;


// ============================================================================
// THREE.CSS3DObject (r59 with custom additions)
// ============================================================================

/**
 * @constructor
 */
THREE.CSS3DRenderer = function () {};

/** @type {!HTMLElement} */     THREE.CSS3DRenderer.prototype.domElement;
/** @type {!HTMLElement} */     THREE.CSS3DRenderer.prototype.projectionElement;
/** @type {!HTMLElement} */     THREE.CSS3DRenderer.prototype.cameraElement;

/**
 * @param {number} width
 * @param {number} height
 */
THREE.CSS3DRenderer.prototype.setSize = function ( width, height ) {};

/**
 * @param {number} scale
 * @param {!THREE.Vector2} translation
 */
THREE.CSS3DRenderer.prototype.getScaleCSSMatrix = function ( scale, translation ) {};

/**
 * @param {!THREE.Scene} scene
 * @param {!THREE.Camera} camera
 */
THREE.CSS3DRenderer.prototype.render = function ( scene, camera ) {};

// ============================================================================
// THREE.WebGLRenderer (r59) (very incomplete)
// ============================================================================

/**
 * @param {{
 *      canvas: (HTMLCanvasElement|undefined),
 *      precision: (string|undefined),
 *      alpha: (boolean|undefined),
 *      premultipliedAlpha: (boolean|undefined),
 *      antialias: (boolean|undefined),
 *      stencil: (boolean|undefined),
 *      preserveDrawingBuffer: (boolean|undefined),
 *      devicePixelRatio: (number|undefined)
 * }} parameters
 * @constructor
 */
THREE.WebGLRenderer = function ( parameters ) {};


// ============================================================================
// THREE.Clock (r59)
// ============================================================================

/**
 * @param {boolean=} autoStart
 * @constructor
 * @struct
 */
THREE.Clock = function ( autoStart ) {};

/** @type {boolean} */  THREE.Clock.prototype.autoStart;
/** @type {number} */   THREE.Clock.prototype.startTime;
/** @type {number} */   THREE.Clock.prototype.oldTime;
/** @type {number} */   THREE.Clock.prototype.elapsedTime;
/** @type {boolean} */  THREE.Clock.prototype.running;

THREE.Clock.prototype.start = function () {};
THREE.Clock.prototype.stop = function () {};

/**
 * @return {number}
 */
THREE.Clock.prototype.getElapsedTime = function () {};

/**
 * @return {number}
 */
THREE.Clock.prototype.getDelta = function () {};


// ============================================================================
// Misc utils
// ============================================================================

THREE.ShaderUtils = {};

THREE.ShaderUtils.lib = {};

THREE.UniformsUtils = {};

/**
@param {!Object} u
@return {!Object}
*/
THREE.UniformsUtils.clone = function(u){};

/**
@param {!Array} u
@return {!Object}
*/
THREE.UniformsUtils.merge = function(u){};

THREE.ImageUtils = {};

/**
@param {!string} s
@return {!THREE.Texture}
*/
THREE.ImageUtils.loadTexture = function(s){};


THREE.GeometryUtils = {};

// ============================================================================
// Misc constants
// ============================================================================

/** @type {number} */ THREE.SmoothShading;
/** @type {number} */ THREE.FlatShading;
/** @type {number} */ THREE.RepeatWrapping;
/** @type {number} */ THREE.DoubleSide;
/** @type {number} */ THREE.NoColors;
/** @type {number} */ THREE.FaceColors;
/** @type {number} */ THREE.VertexColors;

