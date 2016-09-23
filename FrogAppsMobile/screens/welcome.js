'use strict';
import React, { Component } from 'react';
import {
    View,
    TouchableHighlight,
    Image,
    StyleSheet,
    WebView,
} from 'react-native';
var NavigationBar = require('react-native-navbar');

var styles = require('../stylesheets/styles');

class WelcomeScreen extends Component{
    constructor(props){
        super(props);
       
    }
    render(){
        let videourl = {uri: 'https://github.com/facebook/react-native'};
        var navigator = this.props.navigator;
       var rightButtonConfig = {
            title: 'Skip',
            handler: () =>  {
                navigator.replace({
                    id: 'AppList',
                })
            },
        };

        var titleConfig = {
            title: 'Frog Apps',
        };
        return(
            <View style={[styles.container]}>
                <View style={[styles.navigator]}>
                   <NavigationBar
                        style={[styles.navigator]}
                        title={titleConfig}
                        rightButton={rightButtonConfig} />
                </View>
                <WebView
                    source={videourl}
                    style={{marginTop: 20}}
                />
           </View>
        );
    }
   
 _navigate(){
        this.props.navigator.push({
            name: 'AppList', 
        })
    }
}
module.exports = WelcomeScreen;