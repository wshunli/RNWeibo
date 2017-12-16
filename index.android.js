'use strict';

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  WebView,
  Text,
  View
} from 'react-native';

class WeiboHTML5 extends React.Component {

  render() {
    return (
      <View style={styles.container}>
      <WebView source={{uri: 'https://m.weibo.cn/beta'}} style={styles.weibo}/>
      </View>
    )
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  weibo: {
    width:'100%',
    height:'100%',
  },
});

AppRegistry.registerComponent('WeiboHTML5', () => WeiboHTML5);