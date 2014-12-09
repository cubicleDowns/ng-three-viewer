'use strict';

ThreeViewer.directive('select', ['ViewerFactory', function(ViewerFactory){

    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            var x, y,
                width,
                height,
                offsetLeft,
                offsetTop,
                mouseDown = {};
            $(element).hammer({
                prevent_default: false
            }).bind('tap', function(e){
                x = e.gesture.center.x;
                y = e.gesture.center.y;

                // updating these on each click as the screensize / canvas position may have changed
                // this is only really necessary in a fluid layout or where multiple canvases would
                // be in the scene
                offsetLeft = element.context.offsetLeft;
                offsetTop = element.context.offsetTop;
                width = window.innerWidth;
                height = window.innerHeight;

                // creating NDC coordinates for ray intersection.
                mouseDown.x = (x  / width) * 2 - 1;
                mouseDown.y = -(y  / height) * 2 + 1;
                ViewerFactory.makeSelection(mouseDown);

            });
        }
    };
}]).directive('fileLoader', function() {
    return {
        restrict: 'A',
        templateUrl: '/v1/dist/partials/file-loader.html'
    }
}).directive('toolbars', function () {
    return {
        restrict: 'A',
        templateUrl: '/v1/dist/partials/toolbar.html'
    }
}).directive('about', function () {
    return {
        restrict: 'A',
        templateUrl: '/v1/dist/partials/about.html'
    }

}).directive('stopEvent', function () {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs){
            elem.on('click', function (e) {
                e.stopImmediatePropagation();
                e.preventDefault();
            });
        }
    }
});
