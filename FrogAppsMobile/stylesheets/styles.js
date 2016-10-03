'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
} = ReactNative;

var HEADER = '#14b8ff';

module.exports = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: HEADER,
    },
    navigator:{
        flex: 1/10,
        backgroundColor: HEADER,
        overflow: 'hidden'
    },
    button: {
        width: 50,
        height: 20
    },
    center:{
      justifyContent:'center',
      alignItems:'center'
    },
  listViewItemContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    margin: 5,
    padding: 17,
    elevation:3,
    borderWidth:1,
    backgroundColor:'#ffffff',
    borderColor:'#dddddd',
  },
  imgListViewItem:{
    width: 60,
    height: 60,
    marginRight: 10,
    alignItems:'center'
  },
  listViewContent:{
    flex:1
  },
  rateInforContainer:{
    flexDirection:'row'
  },
  rateInforContent:{
    flex:0.7
  },
  btnContainer:{
    flex:0.3,
    justifyContent:'center',
    alignItems:'center',
  },
  btnInstallApp:{
    justifyContent:'center',
    alignItems:'center',
    borderColor:'green',
    borderWidth:1,
    backgroundColor:'#006400',
    borderRadius: 3
  },
  btnOpenApp:{
    justifyContent:'center',
    alignItems:'center',
    borderColor:'green',
    borderWidth:1,
    backgroundColor:'#ffffff',
    borderRadius: 3
  },
  textInsllBtn:{
    color:'#ffffff',
    justifyContent:'center',
    alignItems:'center',
    padding: 5,
    fontWeight:'bold'
  },
  textOpenBtn:{
    color:'green',
    justifyContent:'center',
    alignItems:'center',
    padding: 5,
    fontWeight:'bold'
  },
  titleListViewItem:{
    fontSize:18,
    fontWeight:'100',
    color:'black'
  },
  starcount:{
    color:"#ff8c00"
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
      paddingRight:15,
      justifyContent:'center',
      alignItems:'center'
    },
    imgDetailContainer:{
      flex:0.3,
      justifyContent:'center',
      alignItems:'center'
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
    btnInstallAppDetail:{
      backgroundColor:"#006400",
      borderRadius:2,
      padding: 6
    },
    btnOpenAppDetail:{
      backgroundColor:"#ffffff",
      borderRadius:2,
      padding: 6,
      borderColor:'#006400',
      borderWidth:1
    },
    btnTextInstallAppDetail:{
      fontSize:13,
      color:"#ffffff",
      fontWeight:'bold'
    },
    btnTextOpenAppDetail:{
      fontSize:13,
      color:"#006400",
      fontWeight:'bold'
    },
    commentsContainer:{
        paddingTop: 25,
        paddingBottom:25,
        paddingLeft:15,
        paddingRight:15
    },
    labelComment:{
      fontSize:17,
      fontWeight:'bold',
      color:'gray'
    },
    rateNumber:{
      flex:0.3,
      color:'black',
      fontSize:70,
      fontStyle :'normal',
      fontWeight:'normal',
      justifyContent:'center',
      alignItems:'center',
      textAlign:'center'
    },
    rateChart:{
      flex:0.3,
      justifyContent:'center',
      alignItems:'flex-start',
      marginLeft:5
    },
    contentApplication:{
        paddingTop: 10,
        paddingBottom:10,
        paddingLeft:15,
        paddingRight:15
    },
    describeApplication:{
      color:'black',
      fontSize:15
    },
    /*--------ScrollView--------*/

      scrollView: {
        backgroundColor: '#ffffff',
        height: 300,
      },
      horizontalScrollView: {
        height: 260,
      },
      scrollViewContainer: {
        margin: 7,
        padding: 5,
        alignItems: 'center',
        backgroundColor: '#eaeaea',
        borderRadius: 3,
      },
      scrollViewImg: {
        width: 120,
        height: 260,
      },
      scrollViewImgAtPageDetail:{
        justifyContent:'center',
        alignItems:'center'
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
