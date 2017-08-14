/**
 * @author limichange
 * 
 * 调试面板
 */

import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const RouterList = routerList.map((item, index) => {
      return (
        <View key={index.toString()} style={styles.item}>
          <Text
            style={styles.itemText}
            onPress={() => { this.props.navigation.navigate(item.router) }}>
            {item.name}
          </Text>
        </View>
      )
    })

    return (
      <View style={styles.container}>
        { RouterList }
      </View>
    )
  }
}

const routerList = [{
  name: '主面板', router: 'mainPanel'
}, {
  name: '关于', router: 'about'
}, {
  name: 'loadingPanel', router: 'loadingPanel'
}, {
  name: '欢迎页', router: 'home'
}, {
  name: '注册', router: 'signup'
}, {
  name: '登录', router: 'login'
}]

const styles = StyleSheet.create({
  container: {
    marginTop: 50
  },
  item: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 6,
    paddingLeft: 15,
    paddingRight: 6,
    paddingTop: 6,
    paddingBottom: 6,
    backgroundColor: '#ddd'
  },
  itemText: {
    fontFamily: 'PingFang SC',
    fontWeight: '300',
    fontSize: 30
  }
});
