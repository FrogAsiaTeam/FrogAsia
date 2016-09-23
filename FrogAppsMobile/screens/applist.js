'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
var NavigationBar = require('react-native-navbar');
var styles = require('../stylesheets/styles');

class AppList extends Component{
    render(){
        var navigator = this.props.navigator;
        var leftButtonConfig = {
            title: 'Back',
            handler: () => {
                navigator.replace({
                    id: 'WelcomeScreen',
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
                        leftButton={leftButtonConfig}/>
                </View>
                <View style={{flex: 1, backgroundColor: '#246dd5', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: 'white', fontSize: 32,}}>App List screen</Text>
                </View>
           </View>
        );
    }
}

module.exports = AppList;