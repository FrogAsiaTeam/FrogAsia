'use strict';
import React, { Component } from 'react';
import {
  WebView,
} from 'react-native';

class WelcomeScreen extends Component{
    render(){
        return(
            <WebView
                style={{flex:1}}
                javaScriptEnabled={true}
                source={{uri: 'https://www.youtube.com/embed/ZZ5LpwO-An4?rel=0&autoplay=0&showinfo=0&controls=0'}}
            />
        );
    }
}
module.exports = WelcomeScreen;