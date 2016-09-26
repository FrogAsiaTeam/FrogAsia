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
var NavigationBar = require('react-native-navbar');
var Video = require('react-native-video');
var styles = require('../stylesheets/styles');

class WelcomeScreen extends Component{

    render(){
        let videourl = {uri: 'https://www.youtube.com/embed/ZZ5LpwO-An4?rel=0&autoplay=0&showinfo=0&controls=0'};
        var navigator = this.props.navigator;
       var rightButtonConfig = {
            title: 'Skip',
            handler: () =>  {
                navigator.replace({
                    id: 'AppList'
                })
            },
        };

        var titleConfig = {
            title: 'Frog Apps',
        };
        return(
            <View style={styles.container}>
                <View style={styles.navigator}>
                   <NavigationBar
                        style={styles.navigator}
                        title={titleConfig}
                        rightButton={rightButtonConfig} />
                </View>
                <Video source={{uri: "background"}}
                        style={styles.backgroundVideo}
                        rate={1} volume={1} muted={true}
                        resizeMode="cover" repeat={true} key="video1" />
           </View>

                //   <WebView
                //     source={videourl}
                //     javaScriptEnabled={true}
                //     style={{marginTop: 20}}
                //     mediaPlaybackRequiresUserAction={false}
                // />
        );
    }
}
module.exports = WelcomeScreen;
