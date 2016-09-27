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
    },

    /*----------Page Detail----------*/
    detailContainer:{
      flex:1,
      backgroundColor:'#ffffff'
    },
    headDetail:{
      flexDirection:'row',
      paddingTop: 25,
      paddingBottom:25,
      paddingLeft:15,
      paddingRight:15
    },
    imgDetailContainer:{
      flex:0.3
    },
    infoDetailContainer:{
      flex:0.7,
      marginLeft:10,
      justifyContent:'space-around',
      alignItems:'flex-start'
    },
    imgDetail:{
      height:80,
      width:80
    },
    titleDetail: {
      fontSize: 20,
      fontWeight: 'normal',
      color: 'black'
    },
    btnContainer:{
      flex:0.3,
      justifyContent:'flex-end',
      alignItems:'flex-start'
    },
    downloadAndRating:{
      flexDirection:'row'
    },
    ratingForDetailContainer:{
      flex:0.7
    },
    rateContainer:{
      flexDirection:'row'
    },
    detailRate:{
      justifyContent:'center',
      alignItems:'flex-start',
      paddingRight: 5
    },
    btn:{
      backgroundColor:"#32cd32",
      borderRadius:2,
      padding: 6
    },
    btnText:{
      fontSize:13,
      color:"#ffffff",
      fontWeight:'bold'
    },
    /*-----------Welcome page-----------------*/
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    linearGradient: {
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5,
    },
    buttonText: {
      fontSize: 20,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      color: '#ffffff',
      margin: 10,
      opacity: 0.8,
    },
    loginContainer: {
      backgroundColor: 'transparent',
    },
});
