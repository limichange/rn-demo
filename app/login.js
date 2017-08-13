import api from './api'
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Keyboard } from 'react-native';
import Button from './components/button'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      password: ''
    };
  }
  login () {
    api.user.login()
  }
  render() {
    const { goBack } = this.props.navigation
    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>登录</Text>
        <TextInput
          returnKeyType={'next'}
          style={styles.input}
          placeholder="用户名"
          onChangeText={(username) => this.setState({ username })}
          onSubmitEditing={(event) => {
            this.refs.passwordInput.focus();
          }}
        />

        <TextInput
          returnKeyType={'done'}
          ref='passwordInput'
          style={styles.input}
          placeholder="密码"
          onChangeText={(password) => this.setState({ password })}
          onSubmitEditing={(event) => {
            Keyboard.dismiss()
          }}
        />
        <Button onPress={this.login}>
          登录
        </Button>

        <Button onPress={() => goBack()}>
          取消
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
    fontSize: 50,
    marginBottom: 30
  },
  input: {
    fontFamily: 'PingFang SC',
    fontWeight: '200',
    marginTop: 30,
    marginLeft: 50,
    marginRight: 50,
    height: 50,
    fontSize: 25,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 10
  }
});
