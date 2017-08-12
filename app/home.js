import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Button from 'react-native-button';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>自</Text>
        <Text style={styles.title}>留</Text>
        <Text style={styles.title}>地</Text>
        <Button
          style={styles.loginBtnText}
          containerStyle={styles.loginBtn}
          onPress={() => { this.props.navigation.navigate('login') }}>
          登录
        </Button>
        <Button
          style={styles.signUpBtnText}
          containerStyle={styles.signUpBtn}
          onPress={() => { this.props.navigation.navigate('signup') }}>
          注册
        </Button>
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
