'use strict';
goog.provide('ThreeViewer.StorageService');

/**
 * Service which initiates the THREE.js scene and
 *  provides methods to interact with that scene
 *
 * @param {*} localStorageService
 * @param {ThreeViewer.MessageBus} MessageBus
 *
 * @constructor
 * @export
 * @ngInject
 */
ThreeViewer.StorageService = function(localStorageService, MessageBus) {
    this.localStorageService = localStorageService;
    this.MessageBus = MessageBus;

};
/**
 * @export
 *
 * @param {!string} name
 * @return {*}
 */
ThreeViewer.StorageService.prototype.getFileInfo = function (name) {
    return this.localStorageService.get(name);
};

ThreeViewer.StorageService.prototype.clear = function () {
    this.localStorageService.clearAll();
    this.MessageBus.trigger('updatedHistory');
};

/**
 * Gets the names of all of the file types from local storage
 * @export
 * @return {Array}
 */
ThreeViewer.StorageService.prototype.getNames = function () {
    var names = this.localStorageService.get('models');
    // checking to make sure we're getting an array back.
    if( Object.prototype.toString.call( names ) === '[object Array]' ) {
        return names;
    } else {
        return [];
    }
};

/**
 * Returns an array for all of the files in local storage
 * @export
 * @return {Array.<{file: string, type: boolean}>}
 */
ThreeViewer.StorageService.prototype.getAllFiles = function () {
    var names = this.getNames();
    var pairs = [{"file": "No recent files", "type": false}];
    for(var i = 0; i < names.length; i++){
        pairs.push(this.getFileInfo(names[i]));
    }

    // get rid of filler
    if(pairs[0].type === false && pairs.length > 1){
        pairs.shift();
    }

    return pairs;
};

/**
 * Sets a local storage file.
 *
 * @param {object} info
 */
ThreeViewer.StorageService.prototype.saveFile = function (info) {
    var names = this.getNames();
    if(names.indexOf(info.name) == -1) {
        names.push(info.name);
        this.localStorageService.set('models', names);
        this.localStorageService.set(info.name, info);
    }

    this.MessageBus.trigger('updatedHistory');
    this.MessageBus.trigger('showLoader');
};
