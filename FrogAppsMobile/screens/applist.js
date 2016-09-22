'use strict';
import React, { Component } from 'react';
import {
  View,
} from 'react-native';

class AppList extends Component{
    render(){
        return(
           <View style={{flex: 1, backgroundColor: '#246dd5', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: 'white', fontSize: 32,}}>App List screen</Text>
            </View>
        );
    }
}

module.exports = AppList;