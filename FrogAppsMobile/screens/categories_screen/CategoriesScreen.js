import React, { Component } from 'react';
import { View } from 'react-native';
import CategoriesScreenRowMenu from './CategoriesScreenRowMenu.js';
import CategoriesScreenRowTabs from './CategoriesScreenRowTabs.js';
export default class CategoriesScreen extends Component {
  
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{ }}>
          <CategoriesScreenRowMenu />
        </View>        
        <CategoriesScreenRowTabs />      
        
        
      </View>
    );
  }
} 