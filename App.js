import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }
  onShow () {
    alert(this.state)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>自</Text>
        <Text style={styles.title}>留</Text>
        <Text style={styles.title}>地</Text>
        <View 
          style={styles.loginBtn} 
          onPress={this.onShow}>
          <Text style={styles.btnText}>登录</Text>
        </View>
        <View 
          style={styles.signUpBtn} 
          onPress={this.onShow}>
          <Text style={styles.btnText}>注册</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100
  },
  title: {
    textAlign: 'center',
    fontFamily: 'PingFang SC',
    fontWeight: '200',
    fontSize: 50
  },
  btnText: {
    textAlign: 'center',
    fontFamily: 'PingFang SC',
    fontWeight: '300',
    fontSize: 20,
    lineHeight: 40
  },
  loginBtn: {
    marginTop: 70,
    marginLeft: 90,
    marginRight: 90,
    borderColor: '#777',
    borderWidth: 1
  },
  signUpBtn: {
    marginTop: 30,
    marginLeft: 90,
    marginRight: 90,
    borderColor: '#777',
    borderWidth: 1
  }
});
