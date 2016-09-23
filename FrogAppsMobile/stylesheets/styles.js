'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
} = ReactNative;

var HEADER = '#3b5998';

module.exports = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: HEADER,
    },
    navigator:{
        flex: 1/10,
        backgroundColor: HEADER,
    },
    button: {
        width: 50,
        height: 20
    }

});