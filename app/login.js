import api from './api'
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Keyboard } from 'react-native';
import Button from './components/button'
import storage from './storage'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      password: ''
    };
  }
  login ({ username, password }) {
    api
      .user
      .login({ username, password })
      .then(res => {
        if (res.data.code === 200) {
          alert('登录成功')
        } else {
          alert('登录失败，请重试')
        }
      })
  }
  render() {
    const { goBack } = this.props.navigation
    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>登录</Text>
        <TextInput
          returnKeyType={'next'}
          style={styles.input}
          placeholder="手机号"
          keyboardType={'numbers-and-punctuation'}
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
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password })}
          onSubmitEditing={(event) => {
            Keyboard.dismiss()
          }}
        />
        <Button 
          type="normal" 
          containerStyle={styles.button} 
          onPress={() => this.login(this.state)}>
          登录
        </Button>

        <Button 
          containerStyle={styles.button} 
          onPress={() => goBack()}>
          取消
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginBottom: 10
  },
  button: {
    marginBottom: 20,
    marginLeft: 80,
    marginRight: 80
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
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 30,
    height: 50,
    fontSize: 25,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 10
  }
});
