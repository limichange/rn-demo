import api from './api'
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Keyboard } from 'react-native';
import Button from './components/button'
import storage from './storage'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '18752069857',
      password: 'houyao'
    };
  }
  signup({ phone, password }) {
    api
      .user
      .signup({ phone, password })
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
        <Text style={styles.title}>注册</Text>
        <TextInput
          returnKeyType={'next'}
          style={styles.input}
          keyboardType={'numbers-and-punctuation'}
          placeholder="手机号"
          onChangeText={(phone) => this.setState({ phone })}
          onSubmitEditing={(event) => {
            this.refs.passwordInput.focus();
          }}
        />

        <TextInput
          returnKeyType={'next'}
          ref='passwordInput'
          style={styles.input}
          secureTextEntry={true}
          placeholder="密码"
          onChangeText={(password) => this.setState({ password })}
          onSubmitEditing={(event) => {
            this.refs.passwordInput2.focus();
          }}
        />

        <TextInput
          returnKeyType={'done'}
          ref='passwordInput2'
          style={styles.input}
          secureTextEntry={true}
          placeholder="密码确认"
          onChangeText={(password) => this.setState({ password })}
          onSubmitEditing={(event) => {
            Keyboard.dismiss()
          }}
        />
        <Button type="normal" containerStyle={styles.button} onPress={() => this.signup(this.state)}>
          注册
        </Button>

        <Button containerStyle={styles.button} onPress={() => goBack()}>
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
