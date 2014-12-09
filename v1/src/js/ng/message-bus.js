ThreeViewer.service('MessageBus',['$rootScope', function($rootScope) {

    this.message = {};

    /**
     * Trigger a message from rootscope.
     * @param {!string} type
     * @param {!string=} message
     */
    this.trigger = function(type, message) {
        this.message[type] = message;
        this.broadcast(type);
    };

    /**
     * Broadcast a message from rootscope
     *
     * @param {!string} type
     */
    this.broadcast = function(type) {
        $rootScope.$broadcast(type);
    };
}]);
