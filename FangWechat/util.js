/**
 * Created by pan on 16/3/29.
 */
var React = require('react-native');
var Dimensions = require('Dimensions');

var {
    PixelRatio
    } = React;

var Util = {
    pixel: 1 / PixelRatio.get(),

    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
};

module.exports = Util;