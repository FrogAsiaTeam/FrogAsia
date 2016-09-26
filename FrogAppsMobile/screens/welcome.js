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

var styles = require('../stylesheets/styles');

class WelcomeScreen extends Component{

    render(){
        let videourl = {uri: 'https://github.com/facebook/react-native'};
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
				<View style={{backgroundColor:'red',flex:1}}>
					<Text>Wellcome to Home Screen</Text>
				</View>
           </View>
        );
    }
}
module.exports = WelcomeScreen;
