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
import Global from '../common/global.js';
import LinearGradient from 'react-native-linear-gradient';
import NavigationBar from 'react-native-navbar';
import styles from '../stylesheets/styles';
import Video from 'react-native-video';
import YouTube from 'react-native-youtube';

class WelcomeScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            isReady: false,
            status: null,
            quality: null,
            error: null,
            isPlaying: true
            }
    }
    
    render(){
        let videourl = {uri: "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"}; //require('../background.mp4');
        var navigator = this.props.navigator;
        return(
            <View style={styles.container}>
              <YouTube
                    ref="youtubePlayer"
                    videoId="3wIuVrUxeW0" // The YouTube video ID
                    play={true}           // control playback of video with true/false
                    hidden={false}        // control visiblity of the entire view
                    playsInline={true}    // control whether the video should play inline
                    loop={false}          // control whether the video should loop when ended
                    controls={1}
                    apiKey="AIzaSyABLPTr0SiElR2jtcDP-omNC9KqWlspUew"
                    style={styles.backgroundVideo}
                    onError={(e)=>this.onError(e)}
                    />
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

        
        //  <Video  navigator={navigator}
        //                 source={videourl}
        //                 style={styles.backgroundVideo}
        //                 rate={1} volume={1} muted={true}
        //                  onEnd={()=>{
        //                         navigator.replace({
        //                             id: 'AppList'
        //                         })
        //                  }}
        //                 resizeMode="cover" repeat={false} key="video1" />
    }
    onReady(e){
        alert('ready');
    }
    onError(e){
        if (e.error != undefined)
            alert(e.error.message);
    }
}
module.exports = WelcomeScreen;
