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
import NavigationBar from 'react-native-navbar';
var styles = require('../stylesheets/styles');
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
                    videoId="RVY4fMRBQOY" // The YouTube video ID
                    play={true}           // control playback of video with true/false
                    hidden={false}        // control visiblity of the entire view
                    playsInline={true}    // control whether the video should play inline
                    loop={false}          // control whether the video should loop when ended
                    controls={0}
                    apiKey="AIzaSyABLPTr0SiElR2jtcDP-omNC9KqWlspUew"
                    onReady={(e)=>{this.setState({isReady: true})}}
                    onChangeState={(e)=>{this.setState({status: e.state})}}
                    onChangeQuality={(e)=>{this.setState({quality: e.quality})}}
                    onError={(e)=>{this.setState({error: e.error})}}
                    style={styles.backgroundVideo}
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

}
module.exports = WelcomeScreen;
