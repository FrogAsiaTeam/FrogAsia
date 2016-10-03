'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from 'react-native';

import Rating from '../components/rating.js';
import ScrollViewApp from '../components/scrollview.js';
import BackButton    from '../components/backbutton.js';
import Icon from 'react-native-vector-icons/Ionicons';

var NavigationBar = require('react-native-navbar');
var styles = require('../stylesheets/styles');
var ProgressBar = require('ProgressBarAndroid');

var THUMBS = [];

class AppDetail extends Component{

    constructor(props){
      super(props);
      console.disableYellowBox = true;
    }
    backButon(){
      this.props.navigator.pop({
          id: 'AppList',
      });
    }

    render(){
      var navigator = this.props.navigator;
      var THUMBS = [
        this.props.data.resources.screenshots.logo1,
        this.props.data.resources.screenshots.logo2,
        this.props.data.resources.screenshots.logo3,
        this.props.data.resources.screenshots.logo4,
        this.props.data.resources.screenshots.logo5
      ];
        return(
            <View style={styles.container}>

                    <NavigationBar
                         style={styles.navigator}
                         leftButton={
                           <BackButton style={[{marginLeft:10}, styles.center]} onPress={this.backButon.bind(this)}/>
                         }/>

                 <ScrollView>
                   <View style={styles.detailContainer}>
                        <View style={styles.headDetail}>
                          <View style={styles.imgDetailContainer}>

                              <Image style={styles.imgDetail} source={{uri:this.props.data.resources.logo}}/>
                          </View>
                          <View style={styles.infoDetailContainer}>

                              <Text style={styles.titleDetail}>{this.props.data.name}</Text>
                              <View style={styles.downloadAndRating}>
                                  <View style= {styles.ratingForDetailContainer}>

                                    <Text>{this.props.data.downloadCount}</Text>
                                    <View style={styles.rateContainer}>
                                      <View style={styles.detailRate}>
                                          <Rating disabled={true} rating={this.props.data.starcount} starSize= {11} starColor= {'gray'}/>
                                      </View>
                                      <Text>{this.props.data.starcount} (611376)</Text>
                                    </View>

                                  </View>
                                  <View style= {styles.btnContainer}>
                                    <TouchableOpacity style={"true" !== this.props.data.isinstall ? styles.btnInstallAppDetail : styles.btnOpenAppDetail}>
                                      <Text style={"true" !== this.props.data.isinstall ? styles.btnTextInstallAppDetail :  styles.btnTextOpenAppDetail}>{"true" !== this.props.data.isinstall ? "INSTALL":"  OPEN  "}</Text>
                                    </TouchableOpacity>
                                  </View>
                              </View>

                          </View>

                        </View>
                        <View style={styles.contentApplication}>
                          <Text style={styles.describeApplication}>{this.props.data.content}</Text>
                        </View>
                        <View style={styles.scrollViewImgAtPageDetail}>
                          <ScrollViewApp thumbs={THUMBS} />
                        </View>

                        <View style={styles.commentsContainer}>
                          <Text style={styles.labelComment}>Comments</Text>
                          <View style={{flexDirection:'row'}}>
                              <Text style={styles.rateNumber}>4.4</Text>
                              <View style={styles.rateChart}>
                                 <Rating disabled={false} rating={this.props.data.starcount} starSize= {20} starColor= {'gold'}/>
                                 <Text>(611376)</Text>
                              </View>
                              <View style={{flex: 0.4,justifyContent:'center'}}>
                                <ProgressBar  color="green" styleAttr='Horizontal' progress={0.8}
                                indeterminate={false} />
                                <ProgressBar  color="olive " styleAttr='Horizontal' progress={0.6}
                                indeterminate={false} />
                                <ProgressBar  color="yellow" styleAttr='Horizontal' progress={0.5}
                                indeterminate={false} />
                                <ProgressBar  color="orange" styleAttr='Horizontal' progress={0.4}
                                indeterminate={false} />
                                <ProgressBar  color="maroon " styleAttr='Horizontal' progress={0.1}
                                indeterminate={false} />
                              </View>
                          </View>
                        </View>

                   </View>
                </ScrollView>
            </View>
        );
    }
}

module.exports = AppDetail;
