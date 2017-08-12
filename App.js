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
          <Text style={styles.loginBtnText}>登录</Text>
        </View>
        <View 
          style={styles.signUpBtn} 
          onPress={this.onShow}>
          <Text style={styles.signUpBtnText}>注册</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 120
  },
  title: {
    textAlign: 'center',
    fontFamily: 'PingFang SC',
    fontWeight: '200',
    fontSize: 50
  },
  loginBtnText: {
    textAlign: 'center',
    fontFamily: 'PingFang SC',
    fontWeight: '300',
    fontSize: 20,
    lineHeight: 40,
    color: 'white'
  },
  signUpBtnText: {
    textAlign: 'center',
    fontFamily: 'PingFang SC',
    fontWeight: '300',
    fontSize: 20,
    lineHeight: 40,
    color: '#666'
  },
  loginBtn: {
    marginTop: 80,
    marginLeft: 85,
    marginRight: 85,
    backgroundColor: '#666',
    borderColor: '#666',
    borderWidth: 2
  },
  signUpBtn: {
    marginTop: 30,
    marginLeft: 85,
    marginRight: 85,
    borderColor: '#666',
    borderWidth: 2
  }
});
