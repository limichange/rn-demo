import React from 'react';
import storage from './storage'
import { Image, StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ top: 210, position: 'absolute', height: '100%', width: '100%' }}>
          <Text style={styles.title}>自</Text>
          <Text style={styles.title}>留</Text>
          <Text style={styles.title}>地</Text>
        </View>
      </View>
    )
  }
}

const bg = (
  <Image style={{ height: '100%' }} source={require('./image/bg.jpg')} />
)

const styles = StyleSheet.create({
  container: {
  },
  title: {
    // color: 'white',
    textAlign: 'center',
    fontFamily: 'PingFang SC',
    fontWeight: '100',
    fontSize: 58,
    backgroundColor: 0
  },
})
