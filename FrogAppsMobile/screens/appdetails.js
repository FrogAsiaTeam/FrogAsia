'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
var NavigationBar = require('react-native-navbar');
var styles = require('../stylesheets/styles');

class AppDetail extends Component{
    render(){
      var navigator = this.props.navigator;
      var leftButtonConfig = {
          title: 'Back',
          handler: () => {
              navigator.pop({
                  id: 'AppList',
              })
          },
      };
      var titleConfig = {
          title: 'Frog Apps Detail',
      };
        return(
            <View style={styles.container}>
                 <View style={styles.navigator}>
                    <NavigationBar
                         style={styles.navigator}
                         title={titleConfig}
                         leftButton={leftButtonConfig}/>
                 </View>
                 <View style={{flex:1, backgroundColor:'#ffffff'}}>

                      <View style={{flexDirection:'row'}}>
                        <View style={{flex:0.23}}>
                            <Image style={{height:80, width:80}} source={this.props.data.img}/>
                        </View>
                        <View style={{flex:0.47, backgroundColor:'yellow'}}>
                          <Text>{this.props.data.title}</Text>
                        </View>
                        <View style={{flex:0.3, backgroundColor:'green'}}>
                        </View>
                      </View>
                 </View>

            </View>
        );
    }
}

module.exports = AppDetail;
