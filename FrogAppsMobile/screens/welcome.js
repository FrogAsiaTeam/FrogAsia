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
var NavigationBar = require('react-native-navbar');
var Video = require('react-native-video');
var styles = require('../stylesheets/styles');

class WelcomeScreen extends Component{

    render(){
        let videourl = {uri: 'https://www.youtube.com/embed/ZZ5LpwO-An4?rel=0&autoplay=0&showinfo=0&controls=0'};
        var navigator = this.props.navigator;
       var rightButtonConfig = {
            title: <Icon name="md-close" size={30} color="#ffffff" />,
            handler: () =>  {
                navigator.replace({
                    id: 'AppList'
                })
            },
        };

        var titleConfig = {
            title: <Text style={styles.textColor}>Frog Applications</Text>,
        };
        return(
            <View style={styles.container}>
                  <View style={styles.navigator}>
                   <NavigationBar
                        style={styles.navigator}
                        title={titleConfig}
                        rightButton={rightButtonConfig} />
                </View>

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
