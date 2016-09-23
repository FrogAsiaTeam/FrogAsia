'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

class AppDetail extends Component{
    render(){
        return(
           <View style={{flex: 1, backgroundColor: '#246dd5', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: 'white', fontSize: 32,}}>App Details screen</Text>
            </View>
        );
    }
}

module.exports = AppDetail;