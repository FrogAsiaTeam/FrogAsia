import React,{Component} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';
var styles = require('../stylesheets/styles');
export default class ScrollViewApp extends Component{
  render(){
    var _scrollView: ScrollView;
    var THUMBS = this.props.thumbs;
    var createThumbRow = (uri, i) => <Thumb key={i} uri={uri} />;
    return(
      <View>
          <ScrollView
            ref={(scrollView) => { _scrollView = scrollView; }}
            automaticallyAdjustContentInsets={false}
            horizontal={true}
            style={[styles.scrollView, styles.horizontalScrollView]}>
            {THUMBS.map(createThumbRow)}
          </ScrollView>
        </View>
    );
  }
}

export class Thumb extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <View style={styles.scrollViewContainer}>
        <Image style={styles.scrollViewImg} source={this.props.uri} />
      </View>
    );
  }
}
