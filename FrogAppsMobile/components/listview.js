import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  ListView,
  TouchableOpacity,
  Navigator
} from 'react-native';
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/Ionicons';
import AppUtil from '../services/AppUtil.js';
import CommonUtils from '../common/CommonUtils.js';
var NavigationBar = require('react-native-navbar');
var styles = require('../stylesheets/styles');

export default class ListViewApp extends Component{

  constructor(props){
      super(props);
      this.ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
      this.state = {
        dataSource: this.ds.cloneWithRows(this.props.mydata),
        hxhIns: ''
      }
  }



  render() {



    return (
            <View style={{flex:1}}>
              <ListView
                dataSource={this.state.dataSource}
                renderRow = {(property)=>{

              //    let _isInstall = this.isAppInstalled(property.appPackage);// CommonUtils.isAppInstalled(property.appPackage);
                  let _isInstall = property.isinstall;
                 let _isSwitchButton = new Boolean(true);
                 if("true"===_isInstall){
                     _isSwitchButton = false;
                  }


                  return(
                    <TouchableOpacity onPress={()=>{
                      this.props.navigator.push({
                          id: 'AppDetail',
                          passProps:{dataItem:property}
                      })
                    }} underlayColor='gray'>
                      <View style={styles.listViewItemContainer}>

                          <Image style={styles.imgListViewItem} source={{uri:property.resources.logo}} />

                          <View style={styles.listViewContent}>
                              <View style={styles.rateInforContainer}>
                                  <View style={styles.rateInforContent}>
                                      <Text style={styles.titleListViewItem}>{property.name}</Text>
                                      <Text style={styles.starcount}>{property.starcount} <Icon name="ios-star" size={17} color="#ff8c00" /></Text>
                                  </View>
                                  <View style={styles.btnContainer}>
                                    <TouchableOpacity style={_isSwitchButton?styles.btnInstallApp:styles.btnOpenApp}>
                                      <Text style={_isSwitchButton?styles.textInsllBtn:styles.textOpenBtn}>{_isSwitchButton?"INSTALL":"   OPEN   "}</Text>
                                    </TouchableOpacity>
                                  </View>
                              </View>
                              <Text>
                              {property.desc}
                              </Text>
                          </View>

                      </View>
                    </TouchableOpacity>
                  )
                }}
                automaticallyAdjustContentInsets={true}
              />
            </View>
          );
  }
}
