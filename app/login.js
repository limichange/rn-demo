import api from './api'
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Keyboard } from 'react-native';
import Button from './components/button'
import storage from './storage'
import style from './style'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    phone: '18752069857',
    password: 'houyao'
  }
  login () {
    const { phone, password } = this.state
    api
      .user
      .signIn({ phone, password })
      .then(res => {
        if (res.data.code === 200) {
          storage.save({
            key: 'token',
            data: res.data.data.token
          })
          alert('登录成功')
        } else {
          alert(res.data.msg)
        }
      })
  }
  render() {
    const { goBack } = this.props.navigation
    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>登录成功</Text>
        <TextInput
          returnKeyType={'next'}
          style={styles.input}
          placeholder="手机号"
          keyboardType={'numbers-and-punctuation'}
          onChangeText={(phone) => this.setState({ phone })}
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
          onPress={() => this.login()}>
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
    marginBottom: 30,
    color: style.color.green
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
    // borderBottomColor: style.color.green,
    borderBottomWidth: 1,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 10
  }
});
