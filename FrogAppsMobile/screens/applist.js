'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import ListViewApp from '../components/listview.js';
var NavigationBar = require('react-native-navbar');
var styles = require('../stylesheets/styles');


/*-----this for call a service load data from fakedata---*/
var DATA = [
    {title:"Microsoft Wordline", content:"access view and edit your file through out ubuntu",starcount:2.5,downloadCount:"10M+download",install:"INSTALLED" ,img:require('../images/outlook.png')},
    {title:"Microsoft outlook", content:"outlook will have you easy to manage your email and update something more", starcount:4.5,downloadCount:"20M+download",install:"",img:require('../images/office.png')},
    {title:"Microsoft Word", content:"if you have an account you can access cloud to storage database",starcount:3,downloadCount:"13M+download",install:"", img:require('../images/word.jpg')},
    {title:"React Native", content:"React Native build app on mobile- facebook copyright",starcount:1,downloadCount:"2M+download", install:"INSTALLED",img:require('../images/outlook.png')},
    {title:"Microsoft outlook", content:"outlook will have you easy to manage your email and update something more", starcount:4.5,downloadCount:"20M+download",install:"",img:require('../images/office.png')},
    {title:"One drive cloud storage", content:"if you have an account you can access cloud to storage database",starcount:3,downloadCount:"13M+download",install:"INSTALLED", img:require('../images/word.jpg')}

  ];

class AppList extends Component{
    render(){
        var navigator = this.props.navigator;
        var titleConfig = {
            title: 'Frog Apps',
        };
        return(
           <View style={styles.container}>
                <View style={styles.navigator}>
                   <NavigationBar
                        style={styles.navigator}
                        title={titleConfig}
                        />
                </View>
                <ListViewApp mydata={DATA} navigator={navigator} />
           </View>

        );
    }
}

module.exports = AppList;
