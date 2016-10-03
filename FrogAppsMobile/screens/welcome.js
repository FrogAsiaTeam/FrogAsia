'use strict';
import React, { Component } from 'react';
import {
    View,
    TouchableHighlight,
    Image,
    StyleSheet,
    WebView,
    TouchableOpacity,
	Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
var Global = require('../common/global.js');
import LinearGradient from 'react-native-linear-gradient';
var NavigationBar = require('react-native-navbar');
var styles = require('../stylesheets/styles');
import Video from 'react-native-video';

class WelcomeScreen extends Component{
    render(){
        let videourl = {uri: "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"}; //require('../background.mp4');
        var navigator = this.props.navigator;
        return(
            <View style={styles.container}>

               <Video  navigator={navigator}
                        source={videourl}
                        style={styles.backgroundVideo}
                        rate={1} volume={1} muted={true}
                         onEnd={()=>{
                                navigator.replace({
                                    id: 'AppList'
                                })
                         }}
                        resizeMode="cover" repeat={false} key="video1" />
                <View style={styles.loginContainer}>
                    <TouchableOpacity style={{justifyContent:'center', alignItems:'flex-end'}} onPress={()=>{
                        navigator.replace({
                            id: 'AppList'
                        })
                    }}>
                       <Icon  name="md-close" size={30} color="#ffffff" />
                    </TouchableOpacity>
                </View>
           </View>
        );
    }

}
module.exports = WelcomeScreen;
