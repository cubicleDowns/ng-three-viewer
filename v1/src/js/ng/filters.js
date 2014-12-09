'use strict';


/**
 * HTML5 input range sliders treat their value as a string instead of a number.
 * These filters force the value to be a number.
 */
ThreeViewer.filter('forceInt', function(){
    return function(input) {
        return parseInt(input, 10);
    };
}).filter('forceFloat', function(){
    return function(input){
        return parseFloat(input);
    }
});