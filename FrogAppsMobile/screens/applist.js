'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import ListViewApp from '../components/listview.js';
import DataService from '../services/dataservice.js';
var NavigationBar = require('react-native-navbar');
var styles = require('../stylesheets/styles');


/*-----this for call a service load data from fakedata---*/
/*var DATA = [
    {title:"Microsoft Wordline", content:"access view and edit your file through out ubuntu",starcount:2.5,downloadCount:"10M+download",appPackage:"com.vn.helloworld1",isinstall:"true" ,img:require('../images/outlook.png')},
    {title:"Microsoft outlook", content:"outlook will have you easy to manage your email and update something more", starcount:4.5,downloadCount:"20M+download",appPackage:"com.helloworld1",isinstall:"false",img:require('../images/office.png')},
    {title:"Microsoft Word", content:"if you have an account you can access cloud to storage database",starcount:3,downloadCount:"13M+download",appPackage:"com.mylayoutKOCO",isinstall:"false", img:require('../images/word.jpg')},
    {title:"React Native", content:"React Native build app on mobile- facebook copyright",starcount:1,downloadCount:"2M+download",appPackage:"com.mylayout", isinstall:"true",img:require('../images/outlook.png')},
    {title:"Microsoft outlook", content:"outlook will have you easy to manage your email and update something more", starcount:4.5,downloadCount:"20M+download",appPackage:"com.mylayout",isinstall:"true",img:require('../images/office.png')},
    {title:"One drive cloud", content:"if you have an account you can access cloud to storage database",starcount:3,downloadCount:"13M+download",appPackage:"com.mylayoutKOCO",isinstall:"false", img:require('../images/word.jpg')}
  ];*/
/*
var DATA =  [
      {
        "name": "Word 2013 New Version",
        "package": "com.frogeducationsdnbhd.my.app",
        "version": "1",
        "released": "2016-06-23 13:11:44",
        "desc": "This is the short description for the application as per the description on the play store",
        "longdesc": "This is the long description form the play store that describes functionality, usually in a pre-formatted list of items i.e. <ul><li>item 1</li><li>item 2</li><li>item 3</li><li>item 4</li><li>item 5</li></ul",
        "resources": {
          "logo": "http://www.word-2013-tutorials.com/wp-content/uploads/2013/04/word-2013-logo.jpg",
          "screenshots": {
            "logo1": "http://donandroid.com/wp-content/uploads/2013/05/google-play-store-4.1.62.png",
            "logo2": "http://cdn.androidadvices.com/wp-content/uploads/2014/03/1.png",
            "logo3": "http://donandroid.com/wp-content/uploads/2013/05/google-play-store-4.1.61.png",
            "logo4": "http://www.yoonhuh.com/blog/wp-content/uploads/2013/04/wpid-Screenshot_2013-04-09-23-27-24.png",
            "logo5": "http://img.wonderhowto.com/img/05/42/63566779057391/0/add-tap-scroll-functionality-android-quickly-jump-top-bottom-any-page.w1456.jpg"
          },
          "videos": {
            "video1": "https://youtube.com/frogoasia/video1",
            "video2": "https://youtube.com/frogoasia/video2",
            "video3": "https://youtube.com/frogoasia/video3",
            "video4": "https://youtube.com/frogoasia/video4",
            "video5": "https://youtube.com/frogoasia/video5"
          }
        }
      },
      {
        "name": "Outlook application",
        "package": "com.frogeducationsdnbhd.my.app",
        "version": "1",
        "released": "2016-06-23 13:11:44",
        "desc": "This is the short description for the application as per the description on the play store",
        "longdesc": "This is the long description form the play store that describes functionality, usually in a pre-formatted list of items i.e. <ul><li>item 1</li><li>item 2</li><li>item 3</li><li>item 4</li><li>item 5</li></ul",
        "resources": {
          "logo": "http://images.pcworld.com/images/article/2012/07/microsoft_outlook_new_logo-11391606.jpg",
          "screenshots": {
            "logo1": "http://donandroid.com/wp-content/uploads/2013/05/google-play-store-4.1.62.png",
            "logo2": "https://images-na.ssl-images-amazon.com/images/I/81PUGM7X7GL.png",
            "logo3": "http://donandroid.com/wp-content/uploads/2013/05/google-play-store-4.1.61.png",
            "logo4": "http://www.yoonhuh.com/blog/wp-content/uploads/2013/04/wpid-Screenshot_2013-04-09-23-27-24.png",
            "logo5": "http://img.wonderhowto.com/img/05/42/63566779057391/0/add-tap-scroll-functionality-android-quickly-jump-top-bottom-any-page.w1456.jpg"
          },
          "videos": {
            "video1": "https://youtube.com/frogoasia/video1",
            "video2": "https://youtube.com/frogoasia/video2",
            "video3": "https://youtube.com/frogoasia/video3",
            "video4": "https://youtube.com/frogoasia/video4",
            "video5": "https://youtube.com/frogoasia/video5"
          }
        }
      }
    ];

*/




    var DATA =[];
    fetch('https://hhoang21.cloudant.com/hhoang21/frogapp')
      .then((response) => response.json())
      .then((responseJson) => {
      DATA  = responseJson.data;
        return responseJson.data;
      })
      .catch((error) => {
        console.error(error);
      });




class AppList extends Component{

constructor(props){
  super(props);

}


    render(){


        var navigator = this.props.navigator;
        var titleConfig = {
            title: 'Frog Apps',
            tintColor :'#ffffff'
        };
        return(
           <View style={styles.container}>

                   <NavigationBar
                        style={styles.navigator}
                        title={titleConfig}
                        />

                <ListViewApp mydata={DATA} navigator={navigator} />
           </View>

        );
    }
}

module.exports = AppList;
