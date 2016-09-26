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
    },

    /*----------ListView----------*/
    listViewContainer:{
    //resizeMode:'cover',
      flex:1,
      backgroundColor:'#ffffff'
    },
    itemContainer:{
      borderWidth:1,
      backgroundColor:'#ffffff',
      borderColor:'#dddddd',
      elevation   : 3, //set boxshadow

      /*shadowOffset:{width: 10, height: 10,},
       shadowColor: 'rgba(255, 255, 255, 1.0)',
       shadowOpacity: 0.3,*/

      margin: 5,
      padding: 5,
      flexDirection: 'row',
    },
    thumb: {
      width: 50,
      height: 50,
      marginRight: 10,
    },
    textContainer: {
      flex: 1
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'black'
    },
    content: {
      fontSize: 14,
      color: '#656565'
    },
    moreContainer: {
      flex:1,
      flexDirection:'row'
    },
    rating: {
      flex: 0.2,
      justifyContent:'center'
    },
    textDownload: {
      flex: 0.4,
      marginLeft:5
    },
    installContainer:{
      flex: 0.4,
      flexDirection:'row'
    },
    textInstall:{
      color:'#0099ff'
    },
    iconInstall:{
      width:20,
      height:20,
      justifyContent:'center'
    }

    /*----------Page Detail----------*/

});
