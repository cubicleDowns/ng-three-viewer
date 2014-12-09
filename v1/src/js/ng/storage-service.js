'use strict';

ThreeViewer.service('StorageService',['localStorageService', 'MessageBus', function(localStorageService, MessageBus) {

    /**
     * @param {!string} name
     *
     * @return {*}
     */
    this.getFileInfo = function (name) {
        return localStorageService.get(name);
    };

    this.clear = function () {
        localStorageService.clearAll();
        MessageBus.trigger('updatedHistory');
    };

    /**
     * Gets the names of all of the file types from local storage
     *
     * @return {Array}
     */
    this.getNames = function () {
        var names = localStorageService.get('models');
        // checking to make sure we're getting an array back.
        if( Object.prototype.toString.call( names ) === '[object Array]' ) {
            return names;
        } else {
            return [];
        }
    };

    /**
     * Returns an array for all of the files in local storage
     *
     * @return {!{file: string, type: boolean}[]}
     */
    this.getAllFiles = function () {
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
     * @param info
     */
    this.saveFile = function (info) {
        var names = this.getNames();
        if(names.indexOf(info.name) == -1) {
            names.push(info.name);
            localStorageService.set('models', names);
            localStorageService.set(info.name, info);
        }

        MessageBus.trigger('updatedHistory');
        MessageBus.trigger('showLoader');
    };
}]);
